declare const assets: Readonly<{
    getURI: (baseURI: string) => string;
    replaceLangStringURIs: (langString: string) => string;
    setImageSources: () => void;
    logNonLocalImages: () => void;
    setCSSAssetStyle: () => Promise<void>;
    readonly USE_CDN: boolean;
    readonly CDNDIR: string;
    readonly CDNVersion: string;
    readonly CDNEndpoint: string;
    readonly CDNDIR_ORIGINAL: string;
}>;
/** @deprecated Use assets.getURI instead */
declare const cdnMedia: (baseURI: string) => string;
/** @deprecated Use assets.getURI instead */
declare const useCDN: boolean;
/** @deprecated Use assets.getURI instead */
declare const CDNDIR: () => string;
/** @deprecated Use assets.CDNVersion instead */
declare const CDNVersion: string;
/** @deprecated Use assets.CDNEndpoint instead */
declare const CDNEndpoint: string;
/** @deprecated Use assets.CDNDIR_ORIGINAL instead */
declare const CDNDIR_ORIGINAL: string;
