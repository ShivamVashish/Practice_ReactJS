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


React.memo(Colorful): Hooks Iss hooks ne ab ye apne parent ko khud bol dega ki jo tere andr changes ho rhe h wo mere andr leker mt aa first tym to run hoga kyuki jb run hi nhi hoga to show kse hoga but ye h phir jb bhi uske parent ke andr changes hoge phir uske andr effect nhi pdega 

React.memo ka means yhi h ki mujhe memorize krdo mere pe effect nhi pd rha React.memo tbhi use kre jb hme lge ki hmare parent ke upr bht sare changes hore h 

agr hmare React.memo ke andr bar bar re-render hoga or change hoga to phir usko render krna pdega phir ye apne colorful wale funciton ko render krayga 

React.memo hme allow krta h agr hmare props change hore h to wo bar bar hme function run krne dega 

agr koi parent ke andr bht sare change hore h to hme apne children ko safe krne ke liye React.memo use krna pdega 