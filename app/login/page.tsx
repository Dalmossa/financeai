import { Button } from "@geist-ui/react";
import { LogInIcon } from "lucide-react";

const LoginPage  = () => {
    return (  
        <div className="grid h-full grid-cols-2">
            {/*ESQUERDA */}
            <div className="flex flex-col h-full justify-center p-8 max-w-[550px] mx-auto">
            <image src="/logo.svg" width={173} height={39} alt="Finace AI" className="mb-8" />
            <h1 className="text-4xl font-bold mb1">Bem vindo</h1>
            <p className="text-muted-foreground mb-8">
                A Finance AI uma plataforma de gestão financeira que utiliza IA para
                monitorar suas movimentações financeiras, e oferecer insights personalizados, 
                facilitando o controle do seu orçamento
            </p>
            <Button variant="outline"> 

                <LogInIcon className="mr-2"/>
                Fazer login ou criar conta
            </Button>
           
            </div>
           { /* DIREITA */}
           <div className="relative h-full w-full">
                <image src="/login.png" alt="Faça login" fill className="object-cover"/>
                
           </div>


        </div>
    );
}
 
export default LoginPage;