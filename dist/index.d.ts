/// <reference types="node" />
declare function generateContainer(htmlString: any, headerHTMLString: any, documentOptions: any, footerHTMLString: any): Promise<Buffer | Blob>;
export default generateContainer;
