declare module 'country-region-data' {
    export interface Region {
        name: string;
        shortCode: string;
    }

    export interface CountryName {
        en: string;
        es: string;
    }

    export interface Country {
        countryName: CountryName;
        countryShortCode: string;
        regions: Region[];
    }

    const countryRegionData: Country[];

    export default countryRegionData;
}
