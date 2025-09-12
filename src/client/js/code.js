(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre.astro-code');

    codeBlocks.forEach((block) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'highlight';
      block.parentNode?.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      const lang = block.getAttribute('data-language') || 'text';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'code-title';
      titleDiv.textContent = lang;

      if (navigator.clipboard) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';

        button.addEventListener('click', async () => {
          const code = block.textContent || '';
          try {
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copied';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 1000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        });

        titleDiv.appendChild(button);
      }

      wrapper.insertBefore(titleDiv, block);
    });
  });
}());
