export default function usePrint() {
  const getStyle = (): string => {
    return document.querySelectorAll("style")[0].innerHTML;
  };

  const getElementHtml = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }
    return element.outerHTML;
  };

  const printElement = (selector: string) => {
    const elementHtml = getElementHtml(selector);
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(`
           <html><head><title>${123123}</title>
             <style>${getStyle()}</style>
             </head>
             <body>
               ${elementHtml}
             </body>
             </html>
           `);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();

    setTimeout(() => {
      printWindow?.close();
    }, 50);
  };

  return {
    printElement,
  };
}
