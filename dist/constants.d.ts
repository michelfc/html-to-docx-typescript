declare const applicationName = "html-to-docx";
declare const defaultOrientation = "portrait";
declare const landscapeWidth = 15840;
declare const landscapeHeight = 12240;
declare const landscapeMargins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
    header: number;
    footer: number;
    gutter: number;
};
declare const portraitMargins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
    header: number;
    footer: number;
    gutter: number;
};
declare const defaultFont = "Times New Roman";
declare const defaultFontSize = 22;
declare const defaultDocumentOptions: {
    orientation: string;
    margins: any;
    title: string;
    subject: string;
    creator: string;
    keywords: string[];
    description: string;
    lastModifiedBy: string;
    revision: number;
    createdAt: Date;
    modifiedAt: Date;
    headerType: string;
    header: boolean;
    footerType: string;
    footer: boolean;
    font: string;
    fontSize: number;
    complexScriptFontSize: number;
    table: {
        row: {
            cantSplit: boolean;
        };
    };
    pageNumber: boolean;
    skipFirstHeaderFooter: boolean;
    lineNumber: boolean;
    lineNumberOptions: {
        countBy: number;
        start: number;
        restart: string;
    };
};
declare const defaultHTMLString = "<p></p>";
declare const relsFolderName = "_rels";
declare const headerFileName = "header1";
declare const footerFileName = "footer1";
declare const themeFileName = "theme1";
declare const documentFileName = "document";
declare const headerType = "header";
declare const footerType = "footer";
declare const themeType = "theme";
declare const hyperlinkType = "hyperlink";
declare const imageType = "image";
declare const internalRelationship = "Internal";
declare const wordFolder = "word";
declare const themeFolder = "theme";
declare const paragraphBordersObject: {
    top: {
        size: number;
        spacing: number;
        color: string;
    };
    left: {
        size: number;
        spacing: number;
        color: string;
    };
    bottom: {
        size: number;
        spacing: number;
        color: string;
    };
    right: {
        size: number;
        spacing: number;
        color: string;
    };
};
declare const colorlessColors: string[];
declare const verticalAlignValues: string[];
export { defaultDocumentOptions, defaultHTMLString, relsFolderName, headerFileName, footerFileName, themeFileName, documentFileName, headerType, footerType, themeType, internalRelationship, wordFolder, themeFolder, landscapeMargins, portraitMargins, defaultOrientation, landscapeWidth, landscapeHeight, applicationName, defaultFont, defaultFontSize, hyperlinkType, imageType, paragraphBordersObject, colorlessColors, verticalAlignValues, };
