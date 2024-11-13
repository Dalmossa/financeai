import { PrismaCient } from "@prisma/client";

declare global{
    //eslint-disable-next-lige no-var
    var cachePrisma = PrismaCient();
    
}

let prisma: PrismaCient();
if (process.env.NODE_ENV = "production") {
    prisma = new PrismaCient();
} else {
    if (!global.cachedPrisma) {
        global.cachePrisma = new PrismaCient();
    }
    prisma = global.cachePrisma;
}

export const db = prisma;