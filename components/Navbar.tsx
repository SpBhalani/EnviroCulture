"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenuInMobileView = () => {
        setIsOpen(false)
    }
    return (
        <nav className="bg-black p-2 font-roboto">
            <div className={`flex mx-6  items-center  ${isOpen ? 'relative justify-end' : 'justify-between'}`}>
                <Link className="hidden md:block" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="340" height="45" viewBox="0 0 340 58">
                        <g id="Group_5267" data-name="Group 5267" transform="translate(-36.596 -52.171)">
                            <g id="Group_4815" data-name="Group 4815" transform="translate(-50.326 621.339)">
                                <g id="Group_4802" data-name="Group 4802" transform="translate(137.237 -562.429)">
                                    <path id="Path_11396" data-name="Path 11396" d="M348.46-505.084v-26.3h20.2v5.573H354.713v5.774h12.545v5.333H354.713v5.814H369.1v3.809h3.888v1.724H344.572v-1.724Z" transform="translate(-344.572 532.029)" fill="#fff" />
                                    <path id="Path_11397" data-name="Path 11397" d="M482.691-505.084v-26.3h5.852l13.748,18.043v-18.043h6.253v26.3h3.888v1.724H502.291l-13.347-17.562v17.562H478.8v-1.724Z" transform="translate(-452.59 532.029)" fill="#fff" />
                                    <path id="Path_11398" data-name="Path 11398" d="M675.827-505.084v1.724H648.25v-1.724h10.421l-10.541-26.3H654.9l7.135,17.843,7.135-17.843h6.774l-10.582,26.3Z" transform="translate(-588.85 532.029)" fill="#fff" />
                                    <path id="Path_11399" data-name="Path 11399" d="M803.1-505.084v1.724H789.954v-1.724H793.4v-26.3h6.253v26.3Z" transform="translate(-702.978 532.029)" fill="#fff" />
                                    <path id="Path_11400" data-name="Path 11400" d="M858.9-505.084v-26.3h10.621q6.533,0,9.319,2.205t2.786,7.1q0,6.736-5.331,8.7l5.852,8.3h3.768v1.724H875.7l-6.213-8.941h-4.329v8.941H855.015v-1.724Zm15.191-13.673a4.236,4.236,0,0,0,1.163-3.308,3.546,3.546,0,0,0-1.2-3.108,7.7,7.7,0,0,0-4.208-.842h-4.69v8.3h4.57Q872.931-517.714,874.094-518.757Z" transform="translate(-755.333 532.029)" fill="#fff" />
                                    <path id="Path_11401" data-name="Path 11401" d="M1039.594-507.726V-506h-33.108v-1.724h8.938a13.865,13.865,0,0,1-5.191-5.173,14.293,14.293,0,0,1-1.9-7.3,13.848,13.848,0,0,1,4.248-10.325,14.392,14.392,0,0,1,10.462-4.15,14.394,14.394,0,0,1,10.461,4.15,13.85,13.85,0,0,1,4.249,10.325,14.179,14.179,0,0,1-1.924,7.3,14.113,14.113,0,0,1-5.17,5.173Zm-8.217-12.45a9.173,9.173,0,0,0-2.4-6.4,7.679,7.679,0,0,0-5.912-2.647,7.678,7.678,0,0,0-5.912,2.647,9.174,9.174,0,0,0-2.4,6.4,9.1,9.1,0,0,0,2.4,6.375,7.7,7.7,0,0,0,5.912,2.626,7.7,7.7,0,0,0,5.912-2.626A9.1,9.1,0,0,0,1031.377-520.176Z" transform="translate(-877.224 534.671)" fill="#fff" />
                                </g>
                                <g id="Group_4803" data-name="Group 4803" transform="translate(311.06 -562.963)">
                                    <path id="Path_11402" data-name="Path 11402" d="M1257.679-509.41a11.374,11.374,0,0,1-9.553,4.742,13.139,13.139,0,0,1-13.454-13.568,13.139,13.139,0,0,1,13.454-13.568,11.228,11.228,0,0,1,8.933,4.085l-2.3,1.714a8.525,8.525,0,0,0-6.636-3.392c-6.636,0-10.61,5.216-10.61,11.161s3.974,11.161,10.61,11.161a8.271,8.271,0,0,0,7.4-3.866Z" transform="translate(-1234.672 532.899)" fill="#fff" />
                                    <path id="Path_11403" data-name="Path 11403" d="M1382.918-466.565a22.78,22.78,0,0,1-.11-2.736h-.073a6.872,6.872,0,0,1-5.724,3.173c-4.339,0-6.417-2.444-6.417-6.675v-10.833H1373v9.447c0,3.793,1.057,5.872,4.63,5.872.51,0,5.177-.328,5.177-6.565v-8.754h2.406v13.313c0,.912.11,2.517.182,3.757Z" transform="translate(-1344.051 494.139)" fill="#fff" />
                                    <path id="Path_11404" data-name="Path 11404" d="M1479.61-509.832H1477.2v-27.574h2.406Z" transform="translate(-1429.841 537.406)" fill="#fff" />
                                    <path id="Path_11405" data-name="Path 11405" d="M1519.321-501.277H1514.4v10.067c0,2.553.985,3.064,2.479,3.064a5.353,5.353,0,0,0,2.479-.656l.109,2.225a8.046,8.046,0,0,1-3.245.62c-1.823,0-4.229-.8-4.229-4.559v-10.76h-3.609v-2.188h3.609v-4.815h2.406v4.815h4.922Z" transform="translate(-1454.931 513.97)" fill="#fff" />
                                    <path id="Path_11406" data-name="Path 11406" d="M1593.519-466.565a22.856,22.856,0,0,1-.109-2.736h-.073a6.873,6.873,0,0,1-5.724,3.173c-4.339,0-6.417-2.444-6.417-6.675v-10.833h2.406v9.447c0,3.793,1.058,5.872,4.63,5.872.511,0,5.178-.328,5.178-6.565v-8.754h2.406v13.313c0,.912.109,2.517.182,3.757Z" transform="translate(-1513.524 494.139)" fill="#fff" />
                                    <path id="Path_11407" data-name="Path 11407" d="M1685.71-480.112c0-1.532-.073-2.845-.146-5.325h2.37v3.173h.073a5.614,5.614,0,0,1,5.469-3.611,6.477,6.477,0,0,1,1.787.219l-.474,2.371a4.057,4.057,0,0,0-1.386-.182,5.34,5.34,0,0,0-5.286,5.471v9.629h-2.407Z" transform="translate(-1597.512 495.942)" fill="#fff" />
                                    <path id="Path_11408" data-name="Path 11408" d="M1741.7-476.246a6.413,6.413,0,0,0,6.271,6.127,6.462,6.462,0,0,0,5.469-2.954l1.86,1.532a8.9,8.9,0,0,1-7.329,3.611,8.666,8.666,0,0,1-8.824-8.973,8.619,8.619,0,0,1,8.605-8.973c5.177.037,8.167,3.866,8.167,8.535v1.094Zm11.594-1.97a5.15,5.15,0,0,0-5.542-5.471c-3.136,0-5.98,2.663-5.98,5.471Z" transform="translate(-1640.631 495.942)" fill="#fff" />
                                </g>
                                <g id="Group_4804" data-name="Group 4804" transform="translate(138.077 -524.799)">
                                    <path id="Path_11409" data-name="Path 11409" d="M348.872-337.721H352.5c2.535,0,4.1,1.092,4.1,3.329s-1.567,3.346-4.1,3.346H350.14v5.794h-1.268Zm1.268,5.512h2.042c2.271,0,3.046-.986,3.046-2.184s-.775-2.166-3.046-2.166H350.14Z" transform="translate(-348.872 338.566)" fill="#fff" />
                                    <path id="Path_11410" data-name="Path 11410" d="M400.657-308.5a4.209,4.209,0,0,1-4.366-4.332,4.209,4.209,0,0,1,4.366-4.332,4.214,4.214,0,0,1,4.384,4.332A4.214,4.214,0,0,1,400.657-308.5Zm0-7.608a3.053,3.053,0,0,0-3.1,3.276,3.053,3.053,0,0,0,3.1,3.276,3.056,3.056,0,0,0,3.116-3.276A3.056,3.056,0,0,0,400.657-316.11Z" transform="translate(-387.031 322.028)" fill="#fff" />
                                    <path id="Path_11411" data-name="Path 11411" d="M454.427-328.734h-1.162v-13.314h1.162Z" transform="translate(-432.879 342.048)" fill="#fff" />
                                    <path id="Path_11412" data-name="Path 11412" d="M476.063-328.734H474.9v-13.314h1.162Z" transform="translate(-450.289 342.048)" fill="#fff" />
                                    <path id="Path_11413" data-name="Path 11413" d="M501.134-307.843a11.092,11.092,0,0,1-.053-1.321h-.035a3.318,3.318,0,0,1-2.764,1.532c-2.095,0-3.1-1.18-3.1-3.223v-5.23h1.162v4.561c0,1.832.51,2.836,2.236,2.836.247,0,2.5-.159,2.5-3.17v-4.227h1.162v6.428c0,.44.053,1.215.088,1.814Z" transform="translate(-466.612 321.157)" fill="#fff" />
                                    <path id="Path_11414" data-name="Path 11414" d="M545.361-324.6h-2.377v4.861c0,1.233.475,1.479,1.2,1.479a2.584,2.584,0,0,0,1.2-.317l.053,1.074a3.884,3.884,0,0,1-1.567.3,1.918,1.918,0,0,1-2.042-2.2v-5.2H540.08v-1.057h1.743v-2.325h1.162v2.325h2.377Z" transform="translate(-502.74 330.732)" fill="#fff" />
                                    <path id="Path_11415" data-name="Path 11415" d="M576.083-334.948a.857.857,0,0,1-.845-.845.856.856,0,0,1,.845-.845.856.856,0,0,1,.845.845A.856.856,0,0,1,576.083-334.948Zm.581,10.567H575.5v-8.242h1.162Z" transform="translate(-531.032 337.696)" fill="#fff" />
                                    <path id="Path_11416" data-name="Path 11416" d="M599.076-308.5a4.209,4.209,0,0,1-4.366-4.332,4.209,4.209,0,0,1,4.366-4.332,4.214,4.214,0,0,1,4.384,4.332A4.214,4.214,0,0,1,599.076-308.5Zm0-7.608a3.052,3.052,0,0,0-3.1,3.276,3.053,3.053,0,0,0,3.1,3.276,3.057,3.057,0,0,0,3.116-3.276A3.056,3.056,0,0,0,599.076-316.11Z" transform="translate(-546.702 322.028)" fill="#fff" />
                                    <path id="Path_11417" data-name="Path 11417" d="M651.079-316.956a11.052,11.052,0,0,1,.053,1.321h.035a3.318,3.318,0,0,1,2.764-1.532c2.1,0,3.1,1.18,3.1,3.223v5.231h-1.162v-4.561c0-1.831-.51-2.835-2.236-2.835-.247,0-2.5.158-2.5,3.17v4.227H649.97v-6.428c0-.44-.053-1.215-.088-1.814Z" transform="translate(-591.099 322.028)" fill="#fff" />
                                    <path id="Path_11418" data-name="Path 11418" d="M734.464-328.531a5.491,5.491,0,0,1-4.612,2.289,6.344,6.344,0,0,1-6.5-6.551,6.344,6.344,0,0,1,6.5-6.551,5.422,5.422,0,0,1,4.313,1.972l-1.109.828a4.115,4.115,0,0,0-3.2-1.638,5.091,5.091,0,0,0-5.123,5.389,5.092,5.092,0,0,0,5.123,5.389,3.994,3.994,0,0,0,3.574-1.867Z" transform="translate(-650.224 339.872)" fill="#fff" />
                                    <path id="Path_11419" data-name="Path 11419" d="M791.188-308.5a4.209,4.209,0,0,1-4.366-4.332,4.209,4.209,0,0,1,4.366-4.332,4.214,4.214,0,0,1,4.384,4.332A4.214,4.214,0,0,1,791.188-308.5Zm0-7.608a3.052,3.052,0,0,0-3.1,3.276,3.053,3.053,0,0,0,3.1,3.276,3.056,3.056,0,0,0,3.116-3.276A3.056,3.056,0,0,0,791.188-316.11Z" transform="translate(-701.297 322.028)" fill="#fff" />
                                    <path id="Path_11420" data-name="Path 11420" d="M843.191-316.956a11.026,11.026,0,0,1,.053,1.321h.035a3.319,3.319,0,0,1,2.764-1.532c2.095,0,3.1,1.18,3.1,3.223v5.231h-1.162v-4.561c0-1.831-.511-2.835-2.236-2.835-.246,0-2.5.158-2.5,3.17v4.227h-1.162v-6.428c0-.44-.053-1.215-.088-1.814Z" transform="translate(-745.695 322.028)" fill="#fff" />
                                    <path id="Path_11421" data-name="Path 11421" d="M892.621-324.6h-2.377v4.861c0,1.233.475,1.479,1.2,1.479a2.582,2.582,0,0,0,1.2-.317l.053,1.074a3.883,3.883,0,0,1-1.567.3,1.918,1.918,0,0,1-2.042-2.2v-5.2H887.34v-1.057h1.743v-2.325h1.162v2.325h2.377Z" transform="translate(-782.185 330.732)" fill="#fff" />
                                    <path id="Path_11422" data-name="Path 11422" d="M922.838-314.384c0-.74-.035-1.374-.071-2.571h1.145v1.532h.035a2.71,2.71,0,0,1,2.641-1.744,3.122,3.122,0,0,1,.863.106l-.229,1.145a1.957,1.957,0,0,0-.669-.088A2.579,2.579,0,0,0,924-313.363v4.649h-1.162Z" transform="translate(-810.694 322.028)" fill="#fff" />
                                    <path id="Path_11423" data-name="Path 11423" d="M953.007-308.5a4.209,4.209,0,0,1-4.366-4.332,4.209,4.209,0,0,1,4.366-4.332,4.214,4.214,0,0,1,4.384,4.332A4.214,4.214,0,0,1,953.007-308.5Zm0-7.608a3.052,3.052,0,0,0-3.1,3.276,3.052,3.052,0,0,0,3.1,3.276,3.057,3.057,0,0,0,3.116-3.276A3.057,3.057,0,0,0,953.007-316.11Z" transform="translate(-831.515 322.028)" fill="#fff" />
                                    <path id="Path_11424" data-name="Path 11424" d="M1006.777-328.734h-1.162v-13.314h1.162Z" transform="translate(-877.363 342.048)" fill="#fff" />
                                    <path id="Path_11425" data-name="Path 11425" d="M1059.906-328.531a5.491,5.491,0,0,1-4.612,2.289,6.344,6.344,0,0,1-6.5-6.551,6.344,6.344,0,0,1,6.5-6.551,5.422,5.422,0,0,1,4.313,1.972l-1.109.828a4.116,4.116,0,0,0-3.2-1.638,5.091,5.091,0,0,0-5.123,5.389,5.091,5.091,0,0,0,5.123,5.389,3.994,3.994,0,0,0,3.574-1.867Z" transform="translate(-912.113 339.872)" fill="#fff" />
                                    <path id="Path_11426" data-name="Path 11426" d="M1116.63-308.5a4.209,4.209,0,0,1-4.366-4.332,4.209,4.209,0,0,1,4.366-4.332,4.213,4.213,0,0,1,4.384,4.332A4.213,4.213,0,0,1,1116.63-308.5Zm0-7.608a3.053,3.053,0,0,0-3.1,3.276,3.053,3.053,0,0,0,3.1,3.276,3.057,3.057,0,0,0,3.116-3.276A3.057,3.057,0,0,0,1116.63-316.11Z" transform="translate(-963.185 322.028)" fill="#fff" />
                                    <path id="Path_11427" data-name="Path 11427" d="M1168.632-316.956a11.064,11.064,0,0,1,.053,1.321h.035a3.319,3.319,0,0,1,2.764-1.532c2.1,0,3.1,1.18,3.1,3.223v5.231h-1.162v-4.561c0-1.831-.51-2.835-2.235-2.835-.247,0-2.5.158-2.5,3.17v4.227h-1.162v-6.428c0-.44-.053-1.215-.088-1.814Z" transform="translate(-1007.582 322.028)" fill="#fff" />
                                    <path id="Path_11428" data-name="Path 11428" d="M1219.548-315a1.921,1.921,0,0,0-1.778-1.11c-.81,0-1.708.352-1.708,1.233,0,.775.546,1.057,1.62,1.3l1.179.282a2.363,2.363,0,0,1,2.007,2.254c0,1.8-1.6,2.536-3.2,2.536a3.591,3.591,0,0,1-3.169-1.6l1-.687a2.5,2.5,0,0,0,2.165,1.233c.951,0,1.937-.423,1.937-1.374,0-.828-.7-1.109-1.567-1.321l-1.127-.264c-.563-.141-2.113-.6-2.113-2.166,0-1.708,1.5-2.483,3.046-2.483a2.853,2.853,0,0,1,2.747,1.479Z" transform="translate(-1045.453 322.028)" fill="#fff" />
                                    <path id="Path_11429" data-name="Path 11429" d="M1262.366-307.843a10.991,10.991,0,0,1-.053-1.321h-.035a3.319,3.319,0,0,1-2.764,1.532c-2.095,0-3.1-1.18-3.1-3.223v-5.23h1.162v4.561c0,1.832.51,2.836,2.236,2.836.247,0,2.5-.159,2.5-3.17v-4.227h1.162v6.428c0,.44.053,1.215.088,1.814Z" transform="translate(-1079.187 321.157)" fill="#fff" />
                                    <path id="Path_11430" data-name="Path 11430" d="M1309.053-328.734h-1.162v-13.314h1.162Z" transform="translate(-1120.609 342.048)" fill="#fff" />
                                    <path id="Path_11431" data-name="Path 11431" d="M1328.228-324.6h-2.377v4.861c0,1.233.476,1.479,1.2,1.479a2.583,2.583,0,0,0,1.2-.317l.053,1.074a3.88,3.88,0,0,1-1.567.3,1.918,1.918,0,0,1-2.042-2.2v-5.2h-1.743v-1.057h1.743v-2.325h1.162v2.325h2.377Z" transform="translate(-1132.725 330.732)" fill="#fff" />
                                    <path id="Path_11432" data-name="Path 11432" d="M1361.645-313.768v-.211a1.866,1.866,0,0,0-2.112-2.131,3.662,3.662,0,0,0-2.518.968l-.7-.828a4.715,4.715,0,0,1,3.485-1.2,2.764,2.764,0,0,1,3.01,2.923v3.681a13.416,13.416,0,0,0,.141,1.849h-1.127a8.219,8.219,0,0,1-.106-1.339h-.035a3.083,3.083,0,0,1-2.905,1.55c-1.461,0-2.834-.81-2.834-2.413,0-2.677,3.151-2.853,5.123-2.853Zm-.6.951c-1.179,0-3.838.088-3.838,1.744,0,1.092,1,1.515,1.937,1.515a2.407,2.407,0,0,0,2.5-2.659v-.6Z" transform="translate(-1159.276 322.028)" fill="#fff" />
                                    <path id="Path_11433" data-name="Path 11433" d="M1405.639-316.956a11.014,11.014,0,0,1,.053,1.321h.035a3.318,3.318,0,0,1,2.764-1.532c2.095,0,3.1,1.18,3.1,3.223v5.231h-1.162v-4.561c0-1.831-.511-2.835-2.236-2.835-.247,0-2.5.158-2.5,3.17v4.227h-1.162v-6.428c0-.44-.053-1.215-.088-1.814Z" transform="translate(-1198.305 322.028)" fill="#fff" />
                                    <path id="Path_11434" data-name="Path 11434" d="M1455.07-324.6h-2.376v4.861c0,1.233.475,1.479,1.2,1.479a2.584,2.584,0,0,0,1.2-.317l.052,1.074a3.881,3.881,0,0,1-1.567.3,1.918,1.918,0,0,1-2.042-2.2v-5.2h-1.743v-1.057h1.743v-2.325h1.162v2.325h2.376Z" transform="translate(-1234.797 330.732)" fill="#fff" />
                                    <path id="Path_11435" data-name="Path 11435" d="M1514.732-336.966a2.727,2.727,0,0,0-2.412-1.215c-1.3,0-2.658.687-2.658,2.254,0,3.364,6.391,1.585,6.391,6.076,0,2.272-2.13,3.61-4.1,3.61a4.689,4.689,0,0,1-3.926-1.849l1.144-.828A3.146,3.146,0,0,0,1512-327.4a2.5,2.5,0,0,0,2.676-2.272c0-3.522-6.391-1.567-6.391-6.128,0-2.413,2.007-3.54,4.031-3.54a4.3,4.3,0,0,1,3.521,1.515Z" transform="translate(-1281.66 339.872)" fill="#fff" />
                                    <path id="Path_11436" data-name="Path 11436" d="M1559.2-312.518a3.1,3.1,0,0,0,3.028,2.959,3.12,3.12,0,0,0,2.641-1.427l.9.74a4.3,4.3,0,0,1-3.538,1.744,4.184,4.184,0,0,1-4.26-4.332,4.161,4.161,0,0,1,4.155-4.332,3.863,3.863,0,0,1,3.943,4.121v.528Zm5.6-.951a2.487,2.487,0,0,0-2.676-2.642,2.9,2.9,0,0,0-2.887,2.642Z" transform="translate(-1321.851 322.028)" fill="#fff" />
                                    <path id="Path_11437" data-name="Path 11437" d="M1610.6-314.384c0-.74-.035-1.374-.071-2.571h1.145v1.532h.035a2.71,2.71,0,0,1,2.641-1.744,3.12,3.12,0,0,1,.863.106l-.229,1.145a1.958,1.958,0,0,0-.669-.088,2.579,2.579,0,0,0-2.553,2.642v4.649H1610.6Z" transform="translate(-1364.145 322.028)" fill="#fff" />
                                    <path id="Path_11438" data-name="Path 11438" d="M1639.606-307.843h-1.3l-3.345-8.242h1.391l2.623,6.939h.035l2.623-6.939h1.32Z" transform="translate(-1383.805 321.157)" fill="#fff" />
                                    <path id="Path_11439" data-name="Path 11439" d="M1684.484-334.948a.856.856,0,0,1-.845-.845.856.856,0,0,1,.845-.845.856.856,0,0,1,.845.845A.856.856,0,0,1,1684.484-334.948Zm.581,10.567H1683.9v-8.242h1.162Z" transform="translate(-1422.98 337.696)" fill="#fff" />
                                    <path id="Path_11440" data-name="Path 11440" d="M1709.537-315.02a2.472,2.472,0,0,0-2.06-1.092,3.007,3.007,0,0,0-3.1,3.276,3.006,3.006,0,0,0,3.1,3.276,2.472,2.472,0,0,0,2.06-1.092l.951.722a3.987,3.987,0,0,1-3.01,1.427,4.113,4.113,0,0,1-4.366-4.332,4.113,4.113,0,0,1,4.366-4.332,3.988,3.988,0,0,1,3.01,1.427Z" transform="translate(-1438.649 322.03)" fill="#fff" />
                                    <path id="Path_11441" data-name="Path 11441" d="M1747.8-312.518a3.1,3.1,0,0,0,3.028,2.959,3.12,3.12,0,0,0,2.641-1.427l.9.74a4.3,4.3,0,0,1-3.539,1.744,4.184,4.184,0,0,1-4.261-4.332,4.162,4.162,0,0,1,4.155-4.332,3.863,3.863,0,0,1,3.944,4.121v.528Zm5.6-.951a2.487,2.487,0,0,0-2.676-2.642,2.9,2.9,0,0,0-2.887,2.642Z" transform="translate(-1473.615 322.028)" fill="#fff" />
                                    <path id="Path_11442" data-name="Path 11442" d="M1800.388-315a1.922,1.922,0,0,0-1.778-1.11c-.809,0-1.707.352-1.707,1.233,0,.775.545,1.057,1.62,1.3l1.179.282a2.363,2.363,0,0,1,2.007,2.254c0,1.8-1.6,2.536-3.2,2.536a3.591,3.591,0,0,1-3.169-1.6l1-.687a2.5,2.5,0,0,0,2.165,1.233c.951,0,1.936-.423,1.936-1.374,0-.828-.7-1.109-1.567-1.321l-1.127-.264c-.563-.141-2.112-.6-2.112-2.166,0-1.708,1.5-2.483,3.045-2.483a2.852,2.852,0,0,1,2.746,1.479Z" transform="translate(-1512.864 322.028)" fill="#fff" />
                                </g>
                                <g id="Group_4814" data-name="Group 4814" transform="translate(86.922 -569.168)">
                                    <g id="Group_4805" data-name="Group 4805" transform="translate(12.677 13.712)">
                                        <path id="Path_11443" data-name="Path 11443" d="M151.835-480.362a16.79,16.79,0,0,0,2.483,1.26,22.876,22.876,0,0,1,22.142-17.144c.337,0,.671.011,1,.025a16.814,16.814,0,0,0-.469-2.746c-.178,0-.355-.013-.534-.013A25.6,25.6,0,0,0,151.835-480.362Z" transform="translate(-151.835 498.98)" fill="#fff" />
                                    </g>
                                    <g id="Group_4806" data-name="Group 4806" transform="translate(17.992 19.562)">
                                        <path id="Path_11444" data-name="Path 11444" d="M179.056-454.132a16.871,16.871,0,0,0,2.755.353,16.071,16.071,0,0,1,15.661-12.487c.464,0,.923.024,1.377.063a16.79,16.79,0,0,0,.505-2.734c-.619-.061-1.247-.094-1.882-.094A18.838,18.838,0,0,0,179.056-454.132Z" transform="translate(-179.056 469.032)" fill="#fff" />
                                    </g>
                                    <g id="Group_4807" data-name="Group 4807" transform="translate(23.501 25.059)">
                                        <path id="Path_11445" data-name="Path 11445" d="M207.265-431.237a16.743,16.743,0,0,0,3.364-.751,12.111,12.111,0,0,1,8.192-5.945,16.868,16.868,0,0,0,1.757-2.958A14.845,14.845,0,0,0,207.265-431.237Z" transform="translate(-207.265 440.892)" fill="#fff" />
                                    </g>
                                    <g id="Group_4808" data-name="Group 4808" transform="translate(4.794 13.073)">
                                        <path id="Path_11446" data-name="Path 11446" d="M113.278-502.251q-.616,0-1.225.032a16.8,16.8,0,0,0-.58,2.763c.6-.052,1.2-.083,1.805-.083a20.573,20.573,0,0,1,11.1,3.234,18.558,18.558,0,0,1,2.335-1.7A23.277,23.277,0,0,0,113.278-502.251Z" transform="translate(-111.473 502.251)" fill="#fff" />
                                    </g>
                                    <g id="Group_4809" data-name="Group 4809" transform="translate(4.681 18.646)">
                                        <path id="Path_11447" data-name="Path 11447" d="M113.373-473.723a16.165,16.165,0,0,0-2.48.191,16.851,16.851,0,0,0,.415,2.939,13.17,13.17,0,0,1,2.065-.164,13.022,13.022,0,0,1,6.729,1.862,18.573,18.573,0,0,1,1.752-2.4A15.971,15.971,0,0,0,113.373-473.723Z" transform="translate(-110.893 473.723)" fill="#fff" />
                                    </g>
                                    <g id="Group_4810" data-name="Group 4810" transform="translate(5.847 24.172)">
                                        <path id="Path_11448" data-name="Path 11448" d="M117.427-445.432c-.189,0-.377.007-.564.014a16.8,16.8,0,0,0,1.4,2.76,12.016,12.016,0,0,1,4.6,1.266,18.359,18.359,0,0,1,.929-2.607A14.767,14.767,0,0,0,117.427-445.432Z" transform="translate(-116.863 445.432)" fill="#fff" />
                                    </g>
                                    <g id="Group_4811" data-name="Group 4811" transform="translate(21.367 3.516)">
                                        <path id="Path_11449" data-name="Path 11449" d="M198.968-541.7c7.631,0,8.215-4.356,12.3-8.442A8.274,8.274,0,0,0,207-551.172c-2.693,0-10.661,1.818-10.661,9.385a5.323,5.323,0,0,0,.224,1.729,13.575,13.575,0,0,1,7-5.443A20.519,20.519,0,0,0,198.968-541.7Z" transform="translate(-196.336 551.172)" fill="#fff" />
                                    </g>
                                    <g id="Group_4812" data-name="Group 4812" transform="translate(8.618)">
                                        <path id="Path_11450" data-name="Path 11450" d="M140.544-561.856c-5.889,0-6.34-3.362-9.492-6.515a6.385,6.385,0,0,1,3.291-.8c2.079,0,8.228,1.4,8.228,7.243a4.11,4.11,0,0,1-.173,1.334,10.476,10.476,0,0,0-5.4-4.2A15.833,15.833,0,0,1,140.544-561.856Z" transform="translate(-131.052 569.168)" fill="#fff" />
                                    </g>
                                    <g id="Group_4813" data-name="Group 4813" transform="translate(0 9.24)">
                                        <path id="Path_11451" data-name="Path 11451" d="M87.727-513.342a20.692,20.692,0,0,0,20.688,20.7,20.692,20.692,0,0,0,20.688-20.7,20.619,20.619,0,0,0-1.838-8.526,21.408,21.408,0,0,1,2.643,10.334,21.5,21.5,0,0,1-21.493,21.5,21.5,21.5,0,0,1-21.493-21.5,21.408,21.408,0,0,1,2.643-10.334A20.619,20.619,0,0,0,87.727-513.342Z" transform="translate(-86.922 521.868)" fill="#fff" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                <Link className={`md:hidden ${isOpen ? 'absolute' : ''}`} style={{ left: '45%' }} href="/">
                    <Image src={'/mobile-logo.png'} alt="logo" width={40} height={40} />
                </Link>

                {/* Navbar for larger screens */}
                <div className="hidden md:flex space-x-4">
                <Link href="/">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Home</p>
                    </Link>
                    <Link href="/services">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Services</p>
                    </Link>
                    <Link href="/about">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">About Us</p>
                    </Link>
                    <Link href="/infrastructure">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Infrastructure</p>
                    </Link>
                    <Link href="/clients">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Clients</p>
                    </Link>
                    <Link href="/certification">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Certificates</p>
                    </Link>
                    <Link href="/contact">
                        <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Contact Us</p>
                    </Link>
                </div>

                {/* Mobile menu button for smaller screens */}
                <div className="md:hidden">
                    <button
                        className={`text-white transition-all duration-300 ease-in-out ${isOpen ? 'transform rotate-90' : ''}`}
                        onClick={toggleMenu}
                    >
                        {
                            isOpen
                                ?
                                <div className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"  ><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
                                    </svg>
                                </div>
                                :
                                <div className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                                        <g fill="#fdf8f8" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M5,9v2h40v-2zM5,24v2h40v-2zM5,39v2h40v-2z"></path></g></g>
                                    </svg>
                                </div>
                        }
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isOpen && (

                    <div
                        className={`md:hidden mt-2 flex flex-col items-center transition-all duration-300 ease-in-out`}
                    >
                        <Link className="mt-7" href="/" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Home</p>
                        </Link>
                        <Link className="mt-7" href="/services" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Services</p>
                        </Link>
                        <Link className="mt-7" href="/about" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">About Us</p>
                        </Link>
                        <Link className="mt-7" href="/infrastructure" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Infrastructure</p>
                        </Link>
                        <Link className="mt-7" href="/clients" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Clients</p>
                        </Link>
                        <Link className="mt-7" href="/certification" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Certificates</p>
                        </Link>
                        <Link className="mt-7 mb-7" href="/contact" onClick={closeMenuInMobileView}>
                            <p className="block text-white  hover:text-[#23ae51] transition-colors duration-300 ease-in-out">Contact Us</p>
                        </Link>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
