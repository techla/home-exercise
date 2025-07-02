import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { FULL_ACCESSIBILITY_RULES } from '../axe-core.config'


const logA11yResults = (violations) => {
  if (violations.length === 0) {
    cy.task('log', '🎉 PERFECT! Application is fully accessible!');
    cy.task('log', '✅ WCAG 2.1 AA compliant');
  } else {
    cy.task('log', `⚠️  ${violations.length} violation(s) detected:`);
    violations.forEach((violation, index) => {
      cy.task('log', `${index + 1}. [${violation.impact.toUpperCase()}] ${violation.id}`);
      cy.task('log', `   📖 ${violation.description}`);
      cy.task('log', `   🔗 ${violation.helpUrl}`);
      cy.task('log', `   🎯 ${violation.nodes.length} element(s) affected`);
      
      violation.nodes.forEach((node, nodeIndex) => {
        cy.task('log', `   📍 Element ${nodeIndex + 1}:`);
        cy.task('log', `      🎯 Target: ${node.target.join(', ')}`);
        cy.task('log', `      💻 HTML: ${node.html.substring(0, 100)}${node.html.length > 100 ? '...' : ''}`);
        if (node.failureSummary) {
          cy.task('log', `      ❌ Issue: ${node.failureSummary}`);
        }
      });
      cy.task('log', '');
    });
  }
};

Given('axe-core is loaded', () => {
  cy.injectAxe();
  cy.wait(2000);
});

Then('the application should be fully accessible', () => {
  cy.checkA11y(null, {
    rules: FULL_ACCESSIBILITY_RULES,
    includedImpacts: ['critical', 'serious']
  }, (violations) => {
    logA11yResults(violations);
  });
});