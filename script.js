var topics = ['HTML', 'Css', 'Git', 'JavaScript'];
function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
}

}

function selectTopic(){
    if (topic === 'HTML'){
    
        console.log("lets study HTML!");
    } 
    else if (topic === 'CSS'){ 
    
        console.log("let's study CSS!")
    } 
    else if (topic === 'Git'){
    
        console.log("let's study Git!");
    
    } else if (topic === 'JavaScript'){
    
        console.log("let's study JavaScript!");
    
    } else {
        console.log('Please try again.');
    }
    
    
    
}

