import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { hdlogo } from "../assets";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>({
        v3LegacyAuthProviderCompatible: true,
    });

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
      //  }, [process.env.REACT_APP_GOOGLE_CLIENT_ID, window.google, divRef.current]); // you can also add your client id as dependency here
    }, []); // you can also add your client id as dependency here
        return <div ref={divRef} />;
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                  
              <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
              <img src={hdlogo} alt="HD Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
     
                    
                    <Box mt={4}>
                        <GoogleButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};