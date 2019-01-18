function f(element){
    
    let children = element.children;
    let i=0;
    let child = children[i];
    const a=child;
    console.log(a);
    while(child) {
        
        f(child);
         child = children[i++];
         
         return a;
         
         
    }
    }
f(document.body);