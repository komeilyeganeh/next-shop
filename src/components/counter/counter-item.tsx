import { FC } from "react";
import { Button } from "../ui/button";

export const CounterItem: FC = () => {
    return <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-md">
        <Button className="w-6 h-6 bg-slate-100 text-black hover:bg-slate-400">-</Button>
        <span>2</span>
        <Button className="w-6 h-6 bg-slate-100 text-black hover:bg-slate-400">+</Button>
    </div>
}