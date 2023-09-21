import pdf from "@/plugins/pdf";

function exportTest() {
  const info = {
    headwrite: "ศูนย์บริการประชาชน",
  };
  const docDefinition = {
    pageMargins: [50, 70, 50, 0],
    content: [
      {
        text: `ม.น.1`,
        fontSize: 18,
        bold: true,
        relativePosition: { x: 470, y: -55 },
      },
      {
        text: `${info.headwrite}`,
        width: 70,
        height: 80,
        absolutePosition: { x: 263, y: 42 },
      },
    ],
    defaultStyle: pdf.primaryStyle(),
  };

  window.pdfMake.createPdf(docDefinition).open();
  //  pdf.pdfPrintPreview(docDefinition)
}
export { exportTest };
