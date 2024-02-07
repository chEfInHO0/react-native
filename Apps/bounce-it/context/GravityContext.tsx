import { createContext } from "react"

type GravityProp = {
    pos:number;
    setPos:(n:number) => void;
}

export const ContextPos = createContext<GravityProp | null>(null)