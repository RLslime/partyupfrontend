import React from "react";

import Cards from "./Cards";

import cards from "../cards.json";


const styles = {
  appStyle: {
    display: "inline-flex",
    justifyContent:"center",
    zIndex: "-2"

  },
  divStyle: {
    backgroundColor: "white"
  },
  wrapperStyle: {
    justifyContent: "center",
    display: "inline flex",
    position: "fixed"
  }
};


const Firstcards = () => {
      return (
<div>
<div style={styles.appStyle}>
<Cards 
title ={cards[0].title}
platform ={cards[0].platform}
tag ={cards[0].tag}
text ={cards[0].text}
image ={cards[0].image}/>
<Cards     
title ={cards[1].title}
platform ={cards[1].platform}
tag ={cards[1].tag}
text ={cards[1].text}
image ={cards[1].image} />
<Cards     
title ={cards[2].title}
platform ={cards[2].platform}
tag ={cards[2].tag}
text ={cards[2].text}
image ={cards[2].image}/>
<Cards     
title ={cards[3].title}
platform ={cards[3].platform}
tag ={cards[3].tag}
text ={cards[3].text}
image ={cards[3].image}/>
<Cards     
title ={cards[4].title}
platform ={cards[4].platform}
tag ={cards[4].tag}
text ={cards[4].text}
image ={cards[4].image}/>
<Cards     
title ={cards[5].title}
platform ={cards[5].platform}
tag ={cards[5].tag}
text ={cards[5].text}
image ={cards[5].image}/>
<Cards     
title ={cards[6].title}
platform ={cards[6].platform}
tag ={cards[6].tag}
text ={cards[6].text}
image ={cards[6].image}/>
</div>

<div style={styles.appStyle}>
<Cards     
title ={cards[7].title}
platform ={cards[7].platform}
tag ={cards[7].tag}
text ={cards[7].text}
image ={cards[7].image}/>
<Cards     
title ={cards[8].title}
platform ={cards[8].platform}
tag ={cards[8].tag}
text ={cards[8].text}
image ={cards[8].image}/>
<Cards     
title ={cards[9].title}
platform ={cards[9].platform}
tag ={cards[9].tag}
text ={cards[9].text}
image ={cards[9].image}/>
<Cards     
title ={cards[10].title}
platform ={cards[10].platform}
tag ={cards[10].tag}
text ={cards[10].text}
image ={cards[10].image}/>
<Cards     
title ={cards[11].title}
platform ={cards[11].platform}
tag ={cards[11].tag}
text ={cards[11].text}
image ={cards[11].image}/>
<Cards     
title ={cards[12].title}
platform ={cards[12].platform}
tag ={cards[12].tag}
text ={cards[12].text}
image ={cards[12].image}/>
<Cards     
title ={cards[13].title}
platform ={cards[13].platform}
tag ={cards[13].tag}
text ={cards[13].text}
image ={cards[13].image}/>
 </div>
</div>
      );

    };

export default Firstcards ;