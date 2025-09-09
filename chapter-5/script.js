//     op session
//
//     ex: 1) uber -> new work hota rehta hai -> so new people ki need hoti hai
//
//                /////////uber/////////
//                 1) discount team             
//                 2) marketing team                                   <- ** in sabke pass puran data hota hai -> so ye sab pattern find karte hai data se and new mai -> is type ka same hua toh pta chal jayega -> fraud hora hai
//                 3) customer support team
//                 4) fraud handler team -> handle fraud in app or override toh ni karra hai
//                 5) data science team
//                 6) bill desk team -> online payment hua hai toh usko handle karna hai
//                 
// 
// 
//             -> ** basically bohot sara data arise hota hai -> usko handle karna padta hai -> so handle karne ke liye -> team banate hai -> ye work hota hai
// 
//             -> in uber new work aate rehte hai -> ex add chalne lagta hai -> so usme fraud hone ke chances badh jate hai -> so usko handle karne ke liye team banate hai
// 
// 
//
//
//            -> 2) ** sdlc -> software development life cycle -> requirements -> design -> implementation -> testing -> deployment -> maintenance
//                       
//                       -> requirement -> product/product manager -> business analyst -> ye log pta karte hai ki kya chahiye -> ui + language + framework + paid user chahiye ya free user chahiye -> ye sab pta karte hai -> srs banega -> software requirement specification
//                       -> design -> senior developer -> sd4 , sd5 high level ke -> ye log design karte hai ki kya chahiye -> architecture banate hai -> low level design + high level design -> database design -> frontend , backend -> ye sab karte hai 
//                       -> implementation -> coding -> junior developer -> sd1, sd2, sd3 low level ke -> ye log coding karte hai
//                       -> testing -> testing team -> ye log testing karte hai -> manual testing + automation testing -> ye sab karte hai
//                       -> deployment -> devops engineer -> ye log deployment karte hai -> aws , azure , gcp -> ye sab karte hai
//                       -> maintenance -> maintenance team -> ye log maintenance karte hai -> bug fix , update , upgrade -> ye sab karte hai
// 
//                       -> ** ye sab team alag alag hoti hai -> har team ka apna apna kaam hota hai -> so ye sab milke ek software banate hai
//                       -> each team ka apna apna kaam hota hai -> so ye sab milke ek software banate hai
// 
//            -> ** oncall -> ek banda hota hai -> wo banda call aane par kaam karta hai -> wo banda 24x7 available rehta hai (2-4 log ki team -> 2 4 month mai 1 baar ye duty lagti hai 1 week ki -> and report banti hai weekly) -> wo banda emergency mai kaam karta hai -> engineer hi rehte hai -> wo banda call aane par kaam karta hai -> 24*7 available rehta hai -> emergency mai kaam karta hai
//
//
// 
// 
// 
//             3) monolithic architecture -> ek hi jagah pe sab kuch hota hai -> ex: wordpress
// 
//                        -> server(ram,processor,storage,etc) -> hardware device + nodejs 
// 
//                    ->    //////////////server//////////////(all available in single server)
//                         frontend,db,backend,payment,auth,images  
//                         //////////////////////////////////// 
//
//                      -> ** simple hota hai -> easy to deploy -> easy to develop -> easy to test -> easy to maintain -> easy to scale -> cost effective
//                      -> ** but agar ek jagah pe problem aayi toh pura system down ho jayega -> ex: db crash ho gaya toh pura system down ho jayega -> ex: traffic badh gaya toh pura system down ho jayega -> ex: payment gateway down ho gaya toh pura system down ho jayega -> ex: auth server down ho gaya toh pura system down ho jayega -> ex: images server down ho gaya toh pura system down ho jayega -> ex: backend server down ho gaya toh pura system down ho jayega -> ex: frontend server down ho gaya toh pura system down ho jayega
//                      -> ** isliye monolithic architecture ko avoid karte hai
// 
//                  -> ex:
//                  -> frontend -> ram + processor
//                  -> backend -> ram + processor
//                  -> db -> ram + processor + storage + ssd
//                  -> ram procesor storage -> 1 hi hai -> so frontend backend need some ram -> but db need more ram + storage -> ** so chalo ram increase kar diye -> so server shift kare money needed hoga -> so cost badh jayega -> so isliye monolithic architecture ko avoid karte hai
//                  -> **** basically if ram increase kare so specification increase karna padta hai -> so storage increase hui -> so cost badh jayega
//                  -> ki 1 chiz ko increase karna hai toh baki sab ko bhi increase karna padta hai -> so cost badh jayega
//                  -> ex: ram = 8gb storage = 1tb processor = i5 -> so ram increase karna hai toh storage + processor bhi increase karna padega -> so cost badh jayega -> ram = 16gb storage = 2tb processor = i5
//
//                  -> ** agar ye decide hogya ki pura code java pe likhna hai so java pe hi code likhegai in whole website
//                  -> ** isliye monolithic architecture ko avoid karte hai
// 
// 
// 
// 
//               4) microservice architecture -> alag alag jagah pe sab services hoti hai -> ex: used in amazon , netflix , etc
// 
//                  -> **** ki jis chiz ki need hai usi chiz ko increase kar sakte hai -> ex: db ko increase karna hai toh sirf db ko increase kar sakte hai -> frontend backend pe koi farak ni padega -> so cost effective
// 
//                   -> disadvantage -> complex hota hai -> difficult to deploy -> difficult to develop -> difficult to test -> difficult to maintain -> difficult to scale -> costlier
//                                   -> ** har server ki cost deni padti hai 
// 
// 
//                      ///////////////////////////////////////////////////////microservice architecture//////////////////////////////////////////////////////////////////
//                       ////frontend server////   ////backend server////   //////db server//////   ////auth server////   ////payment server////   ////images server////
//                       ///////////////////////  /////////////////////   //////////////////////   ////////////////////   //////////////////////   //////////////////////
//                     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
// 
// 
//                   -> **** ex: frontend mai 2 dashboard hai -> ek for user and ek for admin -> so dono alag alag language pe likh shakte hai -> ex: user dashboard react pe likh shakte hai and admin dashboard angular pe likh shakte hai
//             
//                   -> microservice architecture mai alag alag service hoti hai -> so har service alag alag language pe likh shakte hai -> ex: frontend react , backend nodejs , db mongodb , auth firebase , payment stripe , images cloudinary
//                   -> ** isliye microservice architecture ko prefer karte hai -> team banti hai different different service ke liye -> and ye sab api ke through connect karte hi ek dushre se
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
//
//
//