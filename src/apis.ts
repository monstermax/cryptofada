
import type { Blockchain, Dapp } from "./types";


export async function getBlockchains(): Promise<Blockchain[]> {
    // TODO
    return [];
}


export async function getDapps(): Promise<Dapp[]> {
    // TODO
    return [];
}




export async function getHomepageBlockchains(): Promise<Blockchain[]> {
    const allBlockchains = await getBlockchains();
    const selectedBlockchains = allBlockchains; // TODO
    return selectedBlockchains;
}



export async function getHomepageDapps(): Promise<Dapp[]> {
    const allDapps = await getDapps();
    const selectedDapps = allDapps; // TODO
    return selectedDapps;
}

