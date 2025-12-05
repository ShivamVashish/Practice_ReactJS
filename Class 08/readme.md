<!-- 
Re-render Means = Call the Function again

Primitive number 2 baar render isliye ho raha hai kyunki React 18 dev mode har render ko do baar run karta hai — primitive ki wajah se nahi.
✔ React 18 DEV MODE me createRoot() → 2 baar render by default
✔ Console me double log dikh raha → tumko lag raha primitive sirf 2 baar hi chalta hai
✔ 3rd click pe same value set ho rahi → React skip kar deta hai

React function 1 hi baar chalta hai — lekin Strict Mode me usko React jaan-bujh kar 2 baar run karta hai (sirf development me).
Isliye console me 2 logs dikh rahe hain.
3rd click par bhi function chalta hai — par tumhe lagta nahi kyunki value same hai.

ImpNote=>ye do bar jo run hota h ye react 18 m default tha or ye hmare strict mode m developement ke liye h bss

UseEffect Hooks : 
useEffect React ka hook hai jo side-effects handle karne ke liye use hota hai.
Side-effect matlab UI ke bahar ka kaam jo render ke saath directly nahi hota

Note : UseEffect wala hooks hmara sbse last m run hota h jo hm iske andr instruction denge wo sbse last m run hogi jb clege ye upr wala code bhi run ho jayga niche wala bhi tb ye clega 

agr hme useEffect hooks ki dependencies empty h to ye hooks kbhi nhi clega but agr iske andr mne value dali h to m chahta hu ki jb bhi usss valeu m kuch bhi change ho to call back function phir se run ho dependencies agr empty to normally ek bar hi clega bss ye or agr dependencies array nhi dia to phir to ye har bar clega 