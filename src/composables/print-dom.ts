export default function usePrint() {
  // const getStyle = (): string => {
  //   return document.querySelectorAll("style")[0].innerHTML;
  // };
  const getStyle = (): { style: string, link: string } => {
    const styleLinks = document.getElementsByTagName('link');
    console.log(Array.from(styleLinks).map(({ href }) => `<link href="${href}" rel="stylesheet">`).join('\n'));
    return {
      style: document?.querySelectorAll('style')[0]?.innerHTML || '',
      link: Array.from(styleLinks).map(({ href }) => `<link href="${href}" rel="stylesheet">`).join('\n'), 
    }
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
           <html>
           <head>
           <link href="https://fonts.googleapis.com/css2?family=Lato&family=Lora&family=Montserrat&family=PT+Sans+Narrow:wght@400;700&family=Poppins&display=swap" rel="stylesheet">
           <title>${123123}
           </title>
            ${getStyle().link}
             <style>${getStyle().style}</style>
             </head>
             <body>
               ${elementHtml}
             </body>
             </html>
           `);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();

    // setTimeout(() => {
    //   printWindow?.close();
    // }, 50);
  };

  return {
    printElement,
  };
}
