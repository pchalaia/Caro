// menu tabs switch

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activateTab(tab);
    });
});

function activateTab(selectedTab) {
    tabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        tab.setAttribute('aria-selected', isSelected);
        tab.setAttribute('tabindex', isSelected ? "0" : "-1");
    });
    panels.forEach((panel) => {
        const isActive = panel.id === selectedTab.getAttribute('aria-controls');
        panel.hidden = !isActive;
    });
}




// accordion 
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        const panelId = header.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        // Toggle current item
        header.setAttribute('aria-expanded', !isExpanded);
        panel.hidden = isExpanded;

        // Close other items (optional for one-open-only behavior)
        accordionHeaders.forEach((otherHeader) => {
            if (otherHeader !== header) {
                otherHeader.setAttribute('aria-expanded', 'false');
                const otherPanelId = otherHeader.getAttribute('aria-controls');
                const otherPanel = document.getElementById(otherPanelId);
                otherPanel.hidden = true;
            }
        });
    });
});
