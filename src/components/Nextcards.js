import React from "react";

import Cards from "./Cards";

import cards from "../cards.json";


const styles = {
  appStyle: {
    display: "inline-flex",
    justifyContent:"center",
    zIndex: "2"

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


const Nextcards = () => {
      return (
<div>
<div style={styles.appStyle}>
<Cards 
title ={cards[14].title}
platform ={cards[14].platform}
tag ={cards[14].tag}
text ={cards[14].text}
image ={cards[14].image}/>
<Cards     
title ={cards[15].title}
platform ={cards[15].platform}
tag ={cards[15].tag}
text ={cards[15].text}
image ={cards[15].image} />
<Cards     
title ={cards[16].title}
platform ={cards[16].platform}
tag ={cards[16].tag}
text ={cards[16].text}
image ={cards[16].image}/>
<Cards     
title ={cards[17].title}
platform ={cards[17].platform}
tag ={cards[17].tag}
text ={cards[17].text}
image ={cards[17].image}/>
<Cards     
title ={cards[18].title}
platform ={cards[18].platform}
tag ={cards[18].tag}
text ={cards[18].text}
image ={cards[18].image}/>
<Cards     
title ={cards[19].title}
platform ={cards[19].platform}
tag ={cards[19].tag}
text ={cards[19].text}
image ={cards[19].image}/>
<Cards     
title ={cards[20].title}
platform ={cards[20].platform}
tag ={cards[20].tag}
text ={cards[20].text}
image ={cards[20].image}/>
</div>

<div style={styles.appStyle}>
<Cards     
title ={cards[21].title}
platform ={cards[21].platform}
tag ={cards[21].tag}
text ={cards[21].text}
image ={cards[21].image}/>
<Cards     
title ={cards[22].title}
platform ={cards[22].platform}
tag ={cards[22].tag}
text ={cards[22].text}
image ={cards[22].image}/>
<Cards     
title ={cards[23].title}
platform ={cards[23].platform}
tag ={cards[23].tag}
text ={cards[23].text}
image ={cards[23].image}/>
<Cards     
title ={cards[24].title}
platform ={cards[24].platform}
tag ={cards[24].tag}
text ={cards[24].text}
image ={cards[24].image}/>
<Cards     
title ={cards[25].title}
platform ={cards[25].platform}
tag ={cards[25].tag}
text ={cards[25].text}
image ={cards[25].image}/>
<Cards     
title ={cards[26].title}
platform ={cards[26].platform}
tag ={cards[26].tag}
text ={cards[26].text}
image ={cards[26].image}/>
<Cards     
title ={cards[27].title}
platform ={cards[27].platform}
tag ={cards[27].tag}
text ={cards[27].text}
image ={cards[27].image}/>
 </div>
</div>
      );

    };

export default Nextcards ;