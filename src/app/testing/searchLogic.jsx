"use client";
import Fuse from "fuse.js";
import supabase from "../../supabase-client";

export async function fetchSearchData(){
    const {data:tests, error:testError} = await supabase 
                                            .from ("tests_table")
                                            .select("id, test_name, test_cat");

    const {data:packages, error:packageError} = await supabase
                                                .from("test_packages_table")
                                                .select("id, package_name");

    if (testError || packageError){
        console.error(testError || packageError);
        return[];
    }

    const combinedData = [
        ...tests.map((t) => ({type: "test", ...t})),
        ...packages.map((p) => ({type:"package", ...p})),
    ];

    return combinedData;
}

export function createFuse(data){
    const options ={
        keys: ["test_name", "package_name"],
        threshold: 0.4,
    };

    return new Fuse(data, options);
}