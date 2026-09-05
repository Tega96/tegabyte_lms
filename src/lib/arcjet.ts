import arcjet, { 
    detectBot, 
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow,
} from '@arcjet/next';



export  { 
    detectBot, 
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow,
};

// Create a base arcject application
export default arcjet({
    key: process.env.ARCJET_KEY!,

    characteristics: ["fingerprint"], //To identify and track the client request.
    
    // Whatever is added to the rules runs as a DEFAULT. It can be empty if you don't want any rules.
    rules: [
        shield({
            mode: 'LIVE',
        })
    ]
})