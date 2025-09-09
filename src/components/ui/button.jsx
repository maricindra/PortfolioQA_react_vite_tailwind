import { Slot } from "@radix-ui/react-slot"

export function Button({ className = "", children, asChild = false, ...props }) {
const Comp = asChild ? Slot : "button"
return (
    <Comp
    className={`px-4 py-2 rounded-2xl shadow-md font-medium transition ${className}`}
    {...props}
    >
    {children}
    </Comp>
)
}