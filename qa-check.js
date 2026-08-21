/**
 * gezenbiri — Final Design System & Code Quality Regression Suite
 * Run with: node qa-check.js
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

let totalErrors = 0;
let totalChecks = 0;

console.log('\n======================================================');
console.log('🔍 GEZENBİRİ FINAL REVISION VERIFICATION (QA SUITE)');
console.log('======================================================\n');

function runCheck(name, testFn) {
    totalChecks++;
    try {
        const issues = testFn();
        if (!issues || issues.length === 0) {
            console.log(`✅ PASS: ${name}`);
        } else {
            console.error(`❌ FAIL: ${name}`);
            issues.forEach(issue => {
                console.error(`   - ${issue}`);
                totalErrors++;
            });
        }
    } catch (e) {
        console.error(`❌ ERROR: ${name} (Exception: ${e.message})`);
        totalErrors++;
    }
}

// 1. Check for legacy 0-1px or 0px gap references
runCheck('No legacy 0-1px / 0px System Dot gap definitions', () => {
    const issues = [];
    productionFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('0-1px') || content.includes('margin-right: 1px')) {
            issues.push(`${relPath} contains prohibited '0-1px' or 'margin-right: 1px' string.`);
        }
    });
    return issues;
});

// 2. Check for System Dot double-stretch (height: 0.155em)
runCheck('No System Dot double-stretch (height: 0.155em)', () => {
    const issues = [];
    productionFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('0.155em')) {
            issues.push(`${relPath} contains '0.155em' which causes double-stretch.`);
        }
    });
    return issues;
});

// 3. Check for broken links to old numbered HTML files
runCheck('No broken links to deprecated 01_/02_/03_/04_ filenames', () => {
    const issues = [];
    const deprecatedFiles = [
        '01_gezenbiri_brand_system.html',
        '02_gezenbiri_trip_cards_editorial.html',
        '03_gezenbiri_instagram_suite.html',
        '04_gezenbiri_system_dot.html'
    ];
    productionFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        deprecatedFiles.forEach(dep => {
            if (content.includes(dep)) {
                issues.push(`${relPath} links to deprecated file name '${dep}'.`);
            }
        });
    });
    return issues;
});

// 4. Check for obsolete theme-color (#F7F5F0) or sand drift (#EAE5DC)
runCheck('No obsolete theme-color (#F7F5F0) or color drift (#EAE5DC)', () => {
    const issues = [];
    productionFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('#F7F5F0')) {
            issues.push(`${relPath} contains obsolete theme-color #F7F5F0.`);
        }
        if (content.includes('#EAE5DC')) {
            issues.push(`${relPath} contains drifted sand color #EAE5DC.`);
        }
    });
    return issues;
});

// 5. Check for data/events.js presence and valid structure
runCheck('Central data/events.js exists and exports events', () => {
    const issues = [];
    const eventsPath = path.join(rootDir, 'data/events.js');
    if (!fs.existsSync(eventsPath)) {
        issues.push(`data/events.js not found.`);
    } else {
        const GezenbiriData = require('./data/events.js');
        if (!GezenbiriData || !GezenbiriData.events || GezenbiriData.events.length === 0) {
            issues.push(`GezenbiriData.events is empty or invalid.`);
        }
    }
    return issues;
});

// 6. Check for Favicon ellipse geometry in all HTML files
runCheck('Favicon uses standardized vector ellipse geometry', () => {
    const issues = [];
    const htmlFiles = productionFiles.filter(f => f.endsWith('.html'));
    htmlFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (!content.includes('ellipse cx=\'25\' cy=\'10\'') && !content.includes('ellipse cx="25" cy="10"')) {
            issues.push(`${relPath} favicon SVG is missing standardized ellipse.`);
        }
    });
    return issues;
});

// 7. Check that brand.css is linked in all HTML files
runCheck('brand.css is linked across all HTML entry points', () => {
    const issues = [];
    const htmlFiles = productionFiles.filter(f => f.endsWith('.html'));
    htmlFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (!content.includes('href="brand.css"') && !content.includes('href=\'brand.css\'')) {
            issues.push(`${relPath} does not link to brand.css.`);
        }
    });
    return issues;
});

// 8. Check that NO local System Dot CSS exists in any production HTML file (Single Source of Truth)
runCheck('System Dot geometry is defined exclusively in brand.css', () => {
    const issues = [];
    const htmlFiles = productionFiles.filter(f => f.endsWith('.html'));
    htmlFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('.brand-system-dot {') || content.includes('.system-dot {')) {
            issues.push(`${relPath} contains local duplicate System Dot CSS declaration.`);
        }
    });
    return issues;
});

// 9. Check that Focus Trap is implemented in modals (gezenbiri_website.html & trip-cards.html)
runCheck('Modals implement keyboard focus trap (Tab / Shift+Tab) & ESC closing', () => {
    const issues = [];
    const modalPages = ['gezenbiri_website.html', 'trip-cards.html'];
    modalPages.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (!content.includes('shiftKey') || !content.includes('focusables')) {
            issues.push(`${relPath} is missing keyboard focus trap logic for Tab / Shift+Tab.`);
        }
        if (!content.includes('Escape') && !content.includes('esc')) {
            issues.push(`${relPath} is missing ESC key listener.`);
        }
    });
    return issues;
});

// 10. Check that Dynamic Data Hydration is wired across Website, Trip Cards & Instagram Suite
runCheck('Website, Trip Cards & Instagram Suite dynamically hydrate from data/events.js', () => {
    const issues = [];
    const dynamicPages = [
        { file: 'gezenbiri_website.html', fn: 'renderAllEventsFromData' },
        { file: 'trip-cards.html', fn: 'hydrateTripCardsFromData' },
        { file: 'instagram-suite.html', fn: 'hydrateInstagramSuiteFromData' }
    ];
    dynamicPages.forEach(item => {
        const fullPath = path.join(rootDir, item.file);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (!content.includes(item.fn)) {
            issues.push(`${item.file} is missing dynamic hydration function '${item.fn}'.`);
        }
        if (!content.includes('data/events.js')) {
            issues.push(`${item.file} does not load data/events.js.`);
        }
    });
    return issues;
});

// 11. Check that NO circular CSS variable definitions exist
runCheck('No circular CSS custom property references', () => {
    const issues = [];
    const htmlFiles = productionFiles.filter(f => f.endsWith('.html'));
    htmlFiles.forEach(relPath => {
        const fullPath = path.join(rootDir, relPath);
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('--font-serif: var(--font-serif)') || content.includes('--font-sans: var(--font-main)')) {
            issues.push(`${relPath} contains circular CSS variable reference.`);
        }
    });
    return issues;
});

console.log('\n------------------------------------------------------');
if (totalErrors === 0) {
    console.log(`🎉 ALL ${totalChecks} FINAL VERIFICATION CHECKS PASSED WITH 0 REGRESSIONS!`);
    console.log('Single Source of Truth, Focus Trap, and Pure CSS Architecture confirmed.\n');
    process.exit(0);
} else {
    console.error(`💥 ${totalErrors} REGRESSION ISSUES DETECTED. Please resolve before releasing.\n`);
    process.exit(1);
}
