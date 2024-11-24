"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal"
import { useRouter } from "next/compat/router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal=()=>{
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const session = useSessionContext();
    const {onClose, isOpen} = useAuthModal();

    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    }

    useEffect(()=>{
        if(session){
            if (router) {
                router.push(router.asPath); // Refresh the page
            }
            onClose();
        }
    },[session, router, onClose]);

    return(
        <Modal
        title="Welcome Back!"
        description="Login to your Account"
        isOpen={isOpen}
        onChange={onChange}
        >
            <Auth 
            theme="dark"
            magicLink
            providers={["google","github","linkedin","discord"]}
            supabaseClient={supabaseClient}
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors:{
                            brand: '#404040',
                            brandAccent: '#219ebc'
                        }
                    }
                }
            }}
            
            />
        </Modal>
    );
}

export default AuthModal;