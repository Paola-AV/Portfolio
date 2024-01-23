import { useSpring, animated } from 'react-spring'

export function Blob() {
    const blob1 = "M158.7 -157.7C208 -109.4 252 -54.7 244.8 -7.2C237.6 40.3 179.3 80.6 129.9 130.6C80.6 180.6 40.3 240.3 -4.1 244.4C-48.6 248.6 -97.1 197.1 -126.4 147.1C-155.8 97.1 -165.9 48.6 -159.3 6.6C-152.7 -35.4 -129.4 -70.7 -100 -119C-70.7 -167.4 -35.4 -228.7 9.7 -238.4C54.7 -248 109.4 -206 158.7 -157.7"

    const blob2 = "M139.6 -142.1C164.6 -114.6 157.3 -57.3 164 6.7C170.7 70.7 191.4 141.4 166.4 167.9C141.4 194.4 70.7 176.7 3.4 173.3C-63.9 169.9 -127.8 180.8 -171.6 154.3C-215.4 127.8 -239.2 63.9 -231 8.2C-222.7 -47.4 -182.4 -94.8 -138.6 -122.3C-94.8 -149.8 -47.4 -157.4 4.9 -162.3C57.3 -167.3 114.6 -169.6 139.6 -142.1"

    const blob3 = "M144.4 -150.7C182.7 -106.1 206.4 -53 209 2.6C211.6 58.2 193.1 116.4 154.8 163.6C116.4 210.8 58.2 246.9 0.5 246.4C-57.3 245.9 -114.6 208.9 -164.6 161.7C-214.6 114.6 -257.3 57.3 -256.3 0.9C-255.4 -55.4 -210.8 -110.8 -160.8 -155.4C-110.8 -200.1 -55.4 -234.1 -1.2 -232.9C53 -231.7 106.1 -195.4 144.4 -150.7";

    const blob4 = "M171 -158.7C220.8 -121.2 259.9 -60.6 263.9 4C267.9 68.6 236.8 137.2 187 177.3C137.2 217.5 68.6 229.3 -0.8 230.1C-70.2 230.9 -140.5 220.8 -190.5 180.6C-240.5 140.5 -270.2 70.2 -265.9 4.4C-261.5 -61.5 -223 -123 -173 -160.5C-123 -198 -61.5 -211.5 -0.5 -211.1C60.6 -210.6 121.2 -196.2 171 -158.7";

    const blob5 = "M194.6 -158C234.4 -105.3 236.6 -25.4 217.6 46.3C198.6 118 158.3 181.5 102.1 206.4C46 231.2 -26 217.4 -94.4 187.7C-162.9 158 -227.7 112.4 -240.6 55.1C-253.6 -2.3 -214.8 -71.3 -166 -126.1C-117.3 -180.9 -58.6 -221.4 9.4 -228.9C77.4 -236.4 154.8 -210.8 194.6 -158";
    const blob6 = "M175.5 -94.5C218.8 -26.3 239.3 61.8 206.3 129.9C173.2 198 86.6 246 10.4 240C-65.8 234 -131.6 174 -164.1 106.2C-196.6 38.5 -195.7 -37 -162.8 -99.2C-129.9 -161.3 -65 -210.2 0.6 -210.5C66.1 -210.8 132.2 -162.7 175.5 -94.5";

    const blob7="M17.1,-20.4C22,-16.3,25.5,-10.7,29.2,-3.2C32.8,4.3,36.5,13.7,33.1,18.6C29.7,23.5,19.2,23.8,10.3,26C1.5,28.1,-5.8,32.1,-13.3,31.6C-20.8,31,-28.4,25.9,-33,18.7C-37.7,11.5,-39.3,2.1,-36.5,-5.1C-33.7,-12.4,-26.3,-17.5,-19.5,-21.2C-12.7,-24.9,-6.3,-27.1,-0.1,-26.9C6.1,-26.8,12.3,-24.4,17.1,-20.4Z";
    const blob8="M26.7,-31C34.9,-24.9,42,-16.8,41.3,-9C40.5,-1.3,31.9,6.1,25.5,12.5C19.2,19,15,24.5,9.3,27.2C3.6,30,-3.6,30,-10.1,27.7C-16.6,25.4,-22.3,20.8,-26.1,14.8C-29.8,8.8,-31.6,1.5,-31.9,-7.1C-32.1,-15.7,-30.8,-25.4,-25.3,-32C-19.7,-38.5,-9.9,-41.8,-0.3,-41.5C9.2,-41.1,18.5,-37.1,26.7,-31Z";
    
    const blobAnimation = useSpring({
        from: { x: blob1 },
        to: { x: blob2 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const blobAnimation2 = useSpring({
        from: { x: blob3 },
        to: { x: blob4 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })

    const blobAnimation3 = useSpring({
        from: { x: blob1 },
        to: { x: blob4 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })
   
    const blobAnimation4 = useSpring({
        from: { x: blob2 },
        to: { x: blob3 },
        config: {
            duration: 3000
        },
        loop: { reverse: true }
    })
    return (
        <section>
            <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                        <stop offset="100%" style={{ stopColor: '#561caa' }} />
                    </linearGradient>
                </defs>
                <g transform="translate(407.8302694033731 297.56887719695067)">
                    <animated.path d={blobAnimation.x} fill="url(#grad2)" />
                </g>
            </svg>

            <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                {/* Definir el degradado */}
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                        <stop offset="100%" style={{ stopColor: '#561caa' }} />
                    </linearGradient>
                </defs>

                <g transform="translate(473.53831406023573 293.26283657035844)">
                    {/* Aplicar el degradado como fondo */}
                    <animated.path d={blobAnimation2.x} fill="url(#grad2)" />
                </g>
            </svg>

            <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                        <stop offset="100%" style={{ stopColor: '#561caa' }} />
                    </linearGradient>
                </defs>
                <g transform="translate(407.8302694033731 297.56887719695067)">
                    <animated.path d={blobAnimation3.x} fill="url(#grad2)" />
                </g>
            </svg>
        
            
            <svg id="visual" viewBox="0 0 900 600" width={900} height={600} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                {/* Definir el degradado */}
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#d4079d' }} />
                        <stop offset="100%" style={{ stopColor: '#561caa' }} />
                    </linearGradient>
                </defs>

                <g transform="translate(473.53831406023573 293.26283657035844)">
                    {/* Aplicar el degradado como fondo */}
                    <animated.path d={blobAnimation4.x} fill="url(#grad2)" />
                </g>
            </svg>
        </section>
    )
}