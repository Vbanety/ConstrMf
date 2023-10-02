import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const Reveal = ({children}) => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInview) {
            mainControls.start("visible")
        }
    }, [isInview])

    return (
        <div ref={ref} className="relative overflow-hidden w-full">
            <motion.div
                variants={{
                    hidden: {  opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
            {children}
            </motion.div>
            {/* Revial next element */}
        </div>
    )

}