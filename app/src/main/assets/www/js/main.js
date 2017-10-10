/* Created by:- Adarsh kumar
Any type of distribution of the software or part of the software without the permission of the creator is an illegal act.

Keys: [ t=temporary, u=unit, l=length, b=breadth or base(In the case of triangle), h=height, ar=area, pr=perimeter, vol=volume,
s=side a/b/c are sides, sq.=square unit, cu.=cubic unit, lsa=Lateral surface area, Tsa=total surface area, csa=curved surface area.]*/

function square()
{
var u=prompt("Enter the unit of measurement","cm");
var tl=prompt("Enter the length of a side",2);
var l=parseInt(tl);
var ar=l*l;
var pr=4*l;
var ans= "Area = "+ar+" sq."+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function rectangle()
{
var u=prompt("Enter the unit of measurement","cm");
var tl=prompt("Enter the length",2);
var tb=prompt("Enter the breadth",3);
var l=parseInt(tl);
var b=parseInt(tb); 
var ar=l*b;
var pr=2*(l+b);
var ans= "Area = "+ar+" sq."+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function trapezium()
{
var u=prompt("Enter the unit of measurement","cm");
var tl1=prompt("Enter the length of 1st parallel side",4);
var tl2=prompt("Enter the length of 2nd parallel side",2);
var th=prompt("Enter the height between the parallels",6);
var tn1=prompt("Enter the length of 1st non-parallel side[Leave empty if you need area only.]",3);
var tn2=prompt("Enter the length of 2nd non-parallel side[Leave empty if you need area only.]",3);
var l1=parseInt(tl1);
var l2=parseInt(tl2);
var n1=parseInt(tn1);
var n2=parseInt(tn2);
var h=parseInt(th);
var ar=1/2*((l1+l2)*h);
var pr=l1+l2+n1+n2;
var ans= "Area = "+ar+" sq. "+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function llgm()
{
var u=prompt("Enter the unit of measurement","cm");
var tb=prompt("Enter the length of base",4);
var ts2=prompt("Enter the length of adjacent side of base[Leave it if you don't need its perimeter]",2);
var th=prompt("Enter the height between the parallels",6);
var b=parseInt(tb);
var s2=parseInt(ts2);
var h=parseInt(th);
var ar=b*h;
var pr=2*(b+s2);
var ans= "Area = "+ar+" sq. "+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function rhombus()
{
var u=prompt("Enter the unit of measurement.","cm");
var ts=prompt("Enter the length of a side.",4);
var td1=prompt("Enter the length of 1st diagonal.",2);
var td2=prompt("Enter the length of 2nd diagonal.",4);
var s=parseInt(ts);
var d1=parseInt(td1);
var d2=parseInt(td2);
var ar=(d1*d2)/2;
var pr=4*s;
var ans= "Area = "+ar+" sq. "+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}
function kite()
{
var u=prompt("Enter the unit of measurement.","cm");
var ts=prompt("Enter the length of shorter side.",4);
var td1=prompt("Enter the length of longer side.",4);
var td2=prompt("Enter the angle between two unequal adjacent sides.",60);
var a=parseInt(ts);
var b=parseInt(td1);
var angle=parseInt(td2)*180*Math.PI;

var ar=a*b*Math.sin(angle);
var pr=2*a+2*b;
var ans= "Area = "+ar+" sq. "+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function triangle()
{
var u=prompt("Enter the unit of measurement","cm");
var ta=prompt("Enter the length of side 1[Leave empty if you need area only]",4);
var tb=prompt("Enter the length of side 2[Leave empty if you need area only]",4);
var tc=prompt("Enter the length of side 3[Leave empty if you need area only]",4);
var tbl=prompt("Enter the length of base[Leave empty if you need perimeter only]",8);
var th=prompt("Enter the height[Leave empty if you need perimeter only]",2);
var sa=parseInt(ta);
var sb=parseInt(tb);
var sc=parseInt(tc);
var bl=parseInt(tbl);
var h=parseInt(th);
var tar=bl*h;
var ar=tar/2;
var pr=sa+sb+sc;
var ans= "Area = "+ar+" sq."+u+"\nPerimeter = "+pr+u;
{
alert(ans);
}}

function circle()
{
var u=prompt("Enter the unit of measurement","cm");
var tr=prompt("Enter the radius of the circle",2);
var r=parseInt(tr);
var pi=Math.PI;
var ar=pi*r*r;
var cr=2*pi*r;
var ans= "Area = "+ar+" sq."+u+" approx. \n"+"Circumference = "+cr+u+" approx.";
{
alert(ans);
}}

function cube()
{
var u=prompt("Enter the unit of measurement","cm");
var ta=prompt("Enter the length of a side",4);
var a=parseInt(ta);
var vol=a*a*a;
var tsa=6*(a*a);
var lsa=4*(a*a);
var ans= "Total surface area = "+tsa+" sq."+u+"\nLateral surface area = "+lsa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}

function cuboid()
{
var u=prompt("Enter the unit of measurement","cm");
var tl=prompt("Enter the length",4);
var tb=prompt("Enter the breadth",2);
var th=prompt("Enter the height",6);
var l=parseInt(tl);
var b=parseInt(tb);
var h=parseInt(th);
var vol=l*b*h;
var tsa=2*((l*b)+(b*h)+(l*h));
var lsa=2*(l+b)*h;
var ans= "Total surface area = "+tsa+" sq."+u+"\nLateral surface area = "+lsa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}

function cylinder()
{
var u=prompt("Enter the unit of measurement","cm");
var tr=prompt("Enter the radius of the base",4);
var th=prompt("Enter the height",6);
var r=parseInt(tr);
var h=parseInt(th);
var pi=Math.PI;
var vol=pi*r*r*h;
var tsa=2*pi*r*(r+h);
var csa=2*pi*r*h;
var ans= "Total surface area = "+tsa+" sq."+u+"\nCurved surface area = "+csa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}

function cone()
{
var u=prompt("Enter the unit of measurement","cm");
var tr=prompt("Enter the radius of the base",4);
var th=prompt("Enter the height",6);
var r=parseInt(tr);
var h=parseInt(th);
var tl=(h*h)+(r*r);
var l=Math.sqrt(tl);
var pi=Math.PI;
var vol=(pi*r*r*h)/3;
var tsa=pi*r*(l+r);
var csa=pi*r*l;
var ans= "Total surface area = "+tsa+" sq."+u+"\nCurved surface area = "+csa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}

function sphere()
{
var u=prompt("Enter the unit of measurement","cm");
var tr=prompt("Enter the radius",4);
var r=parseInt(tr);
var pi=Math.PI;
var vol=4*(pi*r*r*r)/3;
var tsa=4*pi*r*r;
var ans= "Total surface area = "+tsa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}

function hemisphere()
{
var u=prompt("Enter the unit of measurement","cm");
var tr=prompt("Enter the radius",4);
var r=parseInt(tr);
var pi=Math.PI;
var vol=2*(pi*r*r*r)/3;
var tsa=3*pi*r*r;
var csa=2*pi*r*r;
var ans= "Total surface area = "+tsa+" sq."+u+"\nCurved surface area = "+csa+" sq."+u+"\nVolume = "+vol+" cu."+u;
{
alert(ans);
}}