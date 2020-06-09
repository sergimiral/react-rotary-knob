export default  {
    knobX: 100,
    knobY: 100,
    svg:`
    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
        <title>image copy 16</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <path d="M49.9995579,50.5 L25,100 L0,100 L0,0 L100,0 L100,100 L75,100 L49.9995579,50.5 Z" id="path-1"></path>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="image-copy-16">
                <g id="SVG">
                    <g id="background" fill="#000000">
                        <circle id="backgroundCircle" cx="50" cy="50" r="50"></circle>
                    </g>
                    <g id="progress">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="progressMask"></g>
                        <circle id="progressCircle" fill="#FFFFFF" fill-rule="nonzero" mask="url(#mask-2)" cx="50" cy="50" r="40"></circle>
                    </g>
                    <g id="cap" transform="translate(9.499558, 9.737938)">
                        <circle id="capCircle" fill="#FFFFFF" fill-rule="nonzero" cx="40.5004421" cy="40.2620618" r="40"></circle>
                        <line x1="40.5004421" y1="1.26206178" x2="40.5004421" y2="24.2620618" id="capLine" stroke="#000000" stroke-width="6.63129973" stroke-linecap="square"></line>
                    </g>
                    <g id="label" transform="translate(1.923077, 38.461538)" fill="#000000" font-family="Helvetica" font-size="18.2692308" font-weight="normal" opacity="0.248604911">
                        <text id="labelText">
                            <tspan x="34.8362098" y="18.5384615">000</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </g>
    </svg>
`,
updateAttributes: [

    {
        element:'#knob circle',
        attrs: [

            {
                name:'fill',
                value:(props,value)=> {
                    return value >=50 ? 'red': 'black'
                }
            }
        ]
    }
]
}
