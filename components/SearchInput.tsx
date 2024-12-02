"use client"

import qs from "query-string"

import useDebounce from "@/hooks/useDebounce"
import { useRouter } from "next/compat/router"
import { useEffect, useState } from "react"
import Input from "./Input"

const SearchInput = () => {

    
    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce<string>(value, 500)

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    useEffect(() => {
        const query = {
          title: debouncedValue,
        }
    
        const url = qs.stringifyUrl({
          url: "/search",
          query,
        })
    
        if (router && router.push) {
            router.push(url);
        }
    }, [debouncedValue, router, isMounted])

    return (
        <Input placeholder="What do you want to listen to?" value={value} onChange={e => setValue(e.target.value)} />
    );
}

export default SearchInput;