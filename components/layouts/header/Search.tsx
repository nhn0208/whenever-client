"use client";

import { use, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { LoaderCircle, Search } from "lucide-react";
import { ModelProps } from "@/lib/interface";
import { getModelBySearch } from "@/app/api/Model";
import Image from "next/image";
import { formatToVND } from "@/lib/format";

export const SearchInput = () => {
    const [models, setModels] = useState<ModelProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false); // Track focus state
    const debouncedValue = useDebounce(value, 1000);

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("search", value);
            router.push(`/products?${params.toString()}`);
        } else {
            params.delete("search");
            router.push('/shop-all');
        }
    };

    useEffect(() => {
        if (debouncedValue) {
            setLoading(true);
            getModelBySearch(debouncedValue)
                .then((data) => {
                    setModels(data);
                    setLoading(false);
                });
        }
    }, [debouncedValue]);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-x-8 relative">
            <div className="w-full flex justify-center relative">
                <Search
                    width={24}
                    height={24}
                    className="opacity-50 hover:opacity-100 transition-colors duration-200 absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                    onClick={() => handleSearch()}
                />
                <Input
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    onFocus={() => setIsFocused(true)} // Set focus state to true
                    onBlur={() => setIsFocused(false)} // Set focus state to false
                    value={value}
                    className="w-full md:w-[600px] pl-10 focus-visible:ring-slate-200"
                    placeholder="Search products..."
                    type="text"
                />
            </div>
            {debouncedValue && isFocused && ( // Show results only when focused
                <div className="w-full flex items-center justify-center mt-2 border-2 bg-white border-slate-200 rounded-md shadow-md absolute top-16 z-10 overflow-y-scroll md:max-h-[600px]">
                    {loading ? (
                        <LoaderCircle width={32} height={32}/>
                    ) : (
                        <div className="w-full h-full flex flex-col p-2">
                            {models.length > 0 ? (
                                <div className="w-full flex flex-col gap-y-2 p-2">
                                    {models.map((model, index) => (
                                        <div key={index} className="w-full flex items-center justify-between p-2 border-b-2">
                                            <div className="flex items-center gap-x-2">
                                                <Image
                                                    src={model.image[0]}
                                                    alt={model.name}
                                                    width={500}
                                                    height={500}
                                                    style={{ height: "auto", width: "100px" }}
                                                    className="w-16 h-16 object-fill"
                                                />
                                                <div className="flex flex-col">
                                                    <h3 className="text-sm font-bold">{model.name}</h3>
                                                    <p className="text-lg text-right font-mono font-bold text-root">{formatToVND(model.price)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full flex items-center justify-center p-2">
                                    <p className="text-gray-500">No results found</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};