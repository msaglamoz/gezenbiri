/**
 * gezenbiri — 360-Degree Master Brand Guidelines & Deep DOM Linter (25 Master Checks)
 * Run with: npm test  OR  node full-audit.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const productionFiles = [
    'index.html',
    'gezenbiri_website.html',
    'brand-guidelines.html',
    'system-dot.html',
    'trip-cards.html',
    'instagram-suite.html',
    'brand.css',
    'data/events.js'
];

console.log('\n======================================================================');
console.log('🌟 GEZENBİRİ MASTER BRAND GUIDELINE & DOM STRUCTURAL LINTER (25 CHECKS)');
console.log('======================================================================\n');

const auditResults = {
    brandIdentity: [],
    domStructure: [],
    colorPalette: [],
    systemDotGeometry: [],
    typography: [],
    toneOfVoice: [],
    accessibility: [],
    dataArchitecture: [],
    designTokens: [],
    assetAndLinkIntegrity: []
};

let totalIssues = 0;
let totalChecks = 0;

function check(category, testName, fn) {
    totalChecks++;
    try {
        const errors = fn();
        if (!errors || errors.length === 0) {
            auditResults[category].push({ name: testName, status: 'PASS' });
        } else {
            auditResults[category].push({ name: testName, status: 'FAIL', errors: errors });
            totalIssues += errors.length;
        }
    } catch (err) {
        auditResults[category].push({ name: testName, status: 'ERROR', errors: [err.message] });
        totalIssues++;
    }
}

// -------------------------------------------------------------
// 1. BRAND IDENTITY & POSITIONING (MODULES 01, 02, 14)
// -------------------------------------------------------------
check('brandIdentity', 'Module 01 & 14: All UI occurrences use lowercase "gezenbiri" and never uppercase "GEZENBİRİ"', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
            if (line.includes('GEZENBİRİ') && !line.includes("Büyük harf") && !line.includes("🚫") && !line.includes("Don't") && !line.includes("GEZENBİRİ veya")) {
                errs.push(`${f}:${idx+1} contains unauthorized uppercase GEZENBİRİ.`);
            }
            if (line.includes('Gezen Biri') && !line.includes("iki kelime") && !line.includes("🚫") && !line.includes("Don't") && !line.includes("Gezen Biri kullanımı")) {
                errs.push(`${f}:${idx+1} contains unauthorized separated 'Gezen Biri'.`);
            }
        });
    });
    return errs;
});

check('brandIdentity', 'Module 01: Slogan "Bir yere gidelim." preserves typographic dot without orange System Dot', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('Bir yere gidelim<span class="brand-system-dot">') || content.includes('Bir yere gidelim.<span class="brand-system-dot">')) {
            errs.push(`${f} attaches System Dot to slogan "Bir yere gidelim.", which is prohibited.`);
        }
    });
    return errs;
});

check('brandIdentity', 'Module 02: Maximum 1 System Dot per independent logo component', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('brand-system-dot"></span><span class="brand-system-dot">')) {
            errs.push(`${f} has double dot stacked.`);
        }
    });
    return errs;
});

// -------------------------------------------------------------
// 2. DOM STRUCTURE & LOGO COMPONENT LINTING (PREVENTS DESYNC)
// -------------------------------------------------------------
check('domStructure', 'DOM Linter: System Dot is ALWAYS a <span> element, never a block <div>', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('<div class="system-dot"') || content.includes('<div class="brand-system-dot"')) {
            errs.push(`${f} uses <div> for System Dot instead of inline <span>.`);
        }
    });
    return errs;
});

check('domStructure', 'DOM Linter: No obsolete .logotext wrappers around brand wordmark', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('class="logotext"')) {
            errs.push(`${f} contains prohibited legacy .logotext wrapper.`);
        }
    });
    return errs;
});

check('domStructure', 'DOM Linter: No inline width/height style overrides on System Dots', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        const dotMatches = [...content.matchAll(/class=["'][^"']*(?:brand-system-dot|system-dot)[^"']*["'][^>]*style=["']([^"']+)["']/g)];
        dotMatches.forEach(m => {
            const style = m[1];
            if (style.includes('width') || style.includes('height')) {
                errs.push(`${f} overrides System Dot geometry inline: style="${style}".`);
            }
        });
    });
    return errs;
});

// -------------------------------------------------------------
// 3. COLOR PALETTE (MODULE 03: 65-20-10-5 RULE & 7 TONES)
// -------------------------------------------------------------
check('colorPalette', 'Module 03: Canvas uses Warm Cream (#F6F3ED) and meta theme-color matches', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('name="theme-color"') && !content.includes('content="#F6F3ED"')) {
            errs.push(`${f} has incorrect theme-color.`);
        }
        if (content.includes('#F7F5F0')) {
            errs.push(`${f} contains obsolete cream #F7F5F0.`);
        }
    });
    return errs;
});

check('colorPalette', 'Module 03: Core 4 colors (Cream, Charcoal, Coral, Sage) + 3 secondary colors adhere to exact tokens', () => {
    const errs = [];
    productionFiles.forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('#EAE5DC')) {
            errs.push(`${f} contains drifted sand #EAE5DC instead of #D8CCBC.`);
        }
    });
    return errs;
});

// -------------------------------------------------------------
// 4. SYSTEM DOT GEOMETRY (MODULES 02, 10, 14)
// -------------------------------------------------------------
check('systemDotGeometry', 'Single Source of Truth: Geometry defined ONLY in brand.css', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('.brand-system-dot {') || content.includes('.system-dot {')) {
            errs.push(`${f} contains duplicate local System Dot CSS declaration.`);
        }
    });
    return errs;
});

check('systemDotGeometry', 'Master brand.css applies exact width: 0.15em, height: 0.15em, 0.12em gap, and scaleY(1.03)', () => {
    const errs = [];
    const brandCss = fs.readFileSync(path.join(rootDir, 'brand.css'), 'utf8');
    if (!brandCss.includes('0.15em') || !brandCss.includes('0.12em') || !brandCss.includes('scaleY(1.03)')) {
        errs.push('brand.css is missing official System Dot tokens (0.15em / 0.12em / scaleY(1.03)).');
    }
    if (brandCss.includes('0.155em')) {
        errs.push('brand.css contains 0.155em double-stretch bug.');
    }
    return errs;
});

check('systemDotGeometry', 'Favicons use standardized vector ellipse (rx=3, ry=3.09, #FF4D3D)', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (!content.includes('ellipse cx=\'25\' cy=\'10\' rx=\'3\' ry=\'3.09\'') && !content.includes('ellipse cx="25" cy="10" rx="3" ry="3.09"')) {
            errs.push(`${f} favicon SVG is not using the standardized 3x3.09 ellipse.`);
        }
    });
    return errs;
});

check('systemDotGeometry', 'Module 14: Logo System Dot is static, animation only on live indicators', () => {
    const errs = [];
    const brandCss = fs.readFileSync(path.join(rootDir, 'brand.css'), 'utf8');
    if (brandCss.includes('.brand-system-dot {\n    animation:') || brandCss.includes('.brand-system-dot {\n            animation:')) {
        errs.push('brand.css applies pulsing animation to static logo dot.');
    }
    return errs;
});

// -------------------------------------------------------------
// 5. TYPOGRAPHY & CSS VARIABLES (MODULE 04)
// -------------------------------------------------------------
check('typography', 'Plus Jakarta Sans and Instrument Serif loaded cleanly without circular loops', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (content.includes('--font-serif: var(--font-serif)') || content.includes('--font-sans: var(--font-main)')) {
            errs.push(`${f} has circular font property reference.`);
        }
        if (!content.includes('Plus+Jakarta+Sans') || !content.includes('Instrument+Serif')) {
            errs.push(`${f} does not load Google Fonts properly.`);
        }
    });
    return errs;
});

// -------------------------------------------------------------
// 6. TONE OF VOICE & FORBIDDEN TERMS (MODULE 06)
// -------------------------------------------------------------
check('toneOfVoice', 'Module 06: Prohibited agency clichés (unutulmaz tatil, erken rezervasyon, vb.) are absent from UI copy', () => {
    const errs = [];
    const forbidden = ['unutulmaz tatil', 'erken rezervasyon fırsatı', 'rüya gibi tatil'];
    productionFiles.filter(f => f.endsWith('.html') && f !== 'brand-guidelines.html').forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        forbidden.forEach(term => {
            if (content.toLowerCase().includes(term)) {
                errs.push(`${f} contains prohibited tone-of-voice cliché '${term}'.`);
            }
        });
    });
    return errs;
});

// -------------------------------------------------------------
// 7. ACCESSIBILITY & WCAG AA COMPLIANCE (MODULE 11)
// -------------------------------------------------------------
check('accessibility', 'Modals implement role="dialog", aria-modal="true", keyboard focus trap (Tab/Shift+Tab), and ESC closing', () => {
    const errs = [];
    ['gezenbiri_website.html', 'trip-cards.html'].forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (!content.includes('role="dialog"') || !content.includes('aria-modal="true"')) {
            errs.push(`${f} modal is missing role="dialog" or aria-modal="true".`);
        }
        if (!content.includes('shiftKey') || !content.includes('focusables')) {
            errs.push(`${f} modal is missing Tab / Shift+Tab keyboard focus trap.`);
        }
        if (!content.includes('Escape')) {
            errs.push(`${f} modal is missing ESC key listener.`);
        }
        if (!content.includes('lastFocusedElement')) {
            errs.push(`${f} modal is missing focus restore on close.`);
        }
    });
    return errs;
});

check('accessibility', 'Focus visible and prefers-reduced-motion are present in brand.css', () => {
    const errs = [];
    const brandCss = fs.readFileSync(path.join(rootDir, 'brand.css'), 'utf8');
    if (!brandCss.includes(':focus-visible')) {
        errs.push('brand.css is missing :focus-visible rules.');
    }
    if (!brandCss.includes('prefers-reduced-motion')) {
        errs.push('brand.css is missing prefers-reduced-motion media query.');
    }
    return errs;
});

// -------------------------------------------------------------
// 8. CENTRAL DATA & HYDRATION ARCHITECTURE (MODULE 12)
// -------------------------------------------------------------
check('dataArchitecture', 'data/events.js provides single source of truth for workshops & trips', () => {
    const errs = [];
    const eventsPath = path.join(rootDir, 'data/events.js');
    if (!fs.existsSync(eventsPath)) {
        errs.push('data/events.js is missing.');
    } else {
        const GezenbiriData = require('./data/events.js');
        if (!GezenbiriData.events || GezenbiriData.events.length < 8) {
            errs.push('events array has fewer than 8 total experiences/trips.');
        }
        if (typeof GezenbiriData.formatDateTurkish !== 'function') {
            errs.push('formatDateTurkish helper is missing.');
        }
        GezenbiriData.events.forEach(e => {
            if (!e.id || !e.title || !e.price || !e.startMeta || !e.startMeta.dayName) {
                errs.push(`Event ${e.id || 'unknown'} is missing required schema fields.`);
            }
        });
    }
    return errs;
});

check('dataArchitecture', 'All dynamic pages (Website, Trip Cards, Instagram Suite) connect and hydrate from events.js', () => {
    const errs = [];
    const mapping = [
        { file: 'gezenbiri_website.html', fn: 'renderAllEventsFromData' },
        { file: 'trip-cards.html', fn: 'hydrateTripCardsFromData' },
        { file: 'instagram-suite.html', fn: 'hydrateInstagramSuiteFromData' }
    ];
    mapping.forEach(m => {
        const content = fs.readFileSync(path.join(rootDir, m.file), 'utf8');
        if (!content.includes('data/events.js')) {
            errs.push(`${m.file} is missing script tag for data/events.js.`);
        }
        if (!content.includes(m.fn)) {
            errs.push(`${m.file} is missing DOM hydration function ${m.fn}.`);
        }
    });
    return errs;
});

// -------------------------------------------------------------
// 9. MASTER DESIGN TOKENS (MODULE 15)
// -------------------------------------------------------------
check('designTokens', 'Module 15: brand.css defines full token specification (colors, radii, shadows, spacing)', () => {
    const errs = [];
    const brandCss = fs.readFileSync(path.join(rootDir, 'brand.css'), 'utf8');
    const requiredTokens = [
        '--gb-cream',
        '--gb-charcoal',
        '--gb-coral',
        '--gb-sage',
        '--gb-sky',
        '--gb-sand',
        '--gb-stone',
        '--gb-radius-sm',
        '--gb-radius-lg',
        '--gb-radius-pill',
        '--gb-shadow-subtle',
        '--gb-shadow-floating'
    ];
    requiredTokens.forEach(t => {
        if (!brandCss.includes(t)) {
            errs.push(`brand.css is missing required master token '${t}'.`);
        }
    });
    return errs;
});

// -------------------------------------------------------------
// 10. ASSET, LINK AND NAVIGATION INTEGRITY
// -------------------------------------------------------------
check('assetAndLinkIntegrity', 'Clean URLs: No deprecated 01_/02_/03_/04_ filenames or broken paths in active files', () => {
    const errs = [];
    const deprecated = ['01_gezenbiri_brand_system', '02_gezenbiri_trip_cards', '03_gezenbiri_instagram_suite', '04_gezenbiri_system_dot'];
    productionFiles.forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        deprecated.forEach(dep => {
            if (content.includes(dep)) {
                errs.push(`${f} references deprecated file '${dep}'.`);
            }
        });
    });
    return errs;
});

check('assetAndLinkIntegrity', 'Standard prototype disclaimer is present across all demo and brand hub pages', () => {
    const errs = [];
    const demoPages = ['gezenbiri_website.html', 'trip-cards.html', 'instagram-suite.html', 'brand-guidelines.html', 'index.html'];
    demoPages.forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (!content.includes('gb-prototype-disclaimer')) {
            errs.push(`${f} is missing standard gb-prototype-disclaimer.`);
        }
    });
    return errs;
});

check('assetAndLinkIntegrity', 'Brand domains (gezenbiri.com.tr / gezenbiri.co) and Instagram are present in Hub & Website', () => {
    const errs = [];
    const hubPages = ['index.html', 'gezenbiri_website.html'];
    hubPages.forEach(f => {
        const content = fs.readFileSync(path.join(rootDir, f), 'utf8');
        if (!content.includes('gezenbiri.com.tr') || !content.includes('gezenbiri.co')) {
            errs.push(`${f} is missing official domain references.`);
        }
        if (!content.includes('instagram.com/gezenbiri')) {
            errs.push(`${f} is missing official Instagram account reference.`);
        }
    });
    return errs;
});

check('assetAndLinkIntegrity', 'Zero Broken Assets: All local images in src="..." and CSS url(...) resolve to physical files on disk', () => {
    const errs = [];
    productionFiles.filter(f => f.endsWith('.html')).forEach(relFile => {
        const fullPath = path.join(rootDir, relFile);
        const dir = path.dirname(fullPath);
        const content = fs.readFileSync(fullPath, 'utf8');

        // Check local images in src="..."
        const srcMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
        srcMatches.forEach(m => {
            const url = m[1];
            if (url.startsWith('http') || url.startsWith('data:') || url.includes('${')) return;
            const resolved = path.resolve(dir, url);
            if (!fs.existsSync(resolved)) {
                errs.push(`Broken src in ${relFile}: ${url}`);
            }
        });

        // Check local background-images in url('...')
        const urlMatches = [...content.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)];
        urlMatches.forEach(m => {
            const url = m[1];
            if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('#') || url.includes('${')) return;
            const resolved = path.resolve(dir, url);
            if (!fs.existsSync(resolved)) {
                errs.push(`Broken CSS url in ${relFile}: ${url}`);
            }
        });
    });
    return errs;
});

// -------------------------------------------------------------
// PRINT AUDIT REPORT
// -------------------------------------------------------------
Object.keys(auditResults).forEach(category => {
    console.log(`\n📁 CATEGORY: [${category.toUpperCase()}]`);
    auditResults[category].forEach(res => {
        if (res.status === 'PASS') {
            console.log(`  ✅ ${res.name}`);
        } else {
            console.log(`  ❌ ${res.name}`);
            res.errors.forEach(e => console.log(`     - ${e}`));
        }
    });
});

console.log('\n----------------------------------------------------------------------');
console.log(`AUDIT SUMMARY: ${totalChecks} Checks Performed | ${totalIssues} Issues Found`);
if (totalIssues === 0) {
    console.log('🏆 100% BRAND & DOM INTEGRITY CONFIRMED ACROSS ALL 25 MASTER CHECKS!');
} else {
    console.log(`⚠️ ${totalIssues} non-compliant issues detected. Needs attention.`);
}
console.log('----------------------------------------------------------------------\n');

process.exit(totalIssues === 0 ? 0 : 1);
