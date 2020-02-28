import React from "react";
import {masNoticias,noticiaPrincipal} from "./datos"

const context = React.createContext();

class Provider extends React.Component{
    state={
        news:[],
        noticiaPrincipal:noticiaPrincipal,
        noticiaDetalle:{},
        noticiasMasLeidas:[masNoticias[2]],
        menu:[],
        categoria:[],
        categoriaOn:false,        
        seccion:[]
       
    };
    componentDidMount(){
        this.setNews()       
    };
    
    setNews=()=>{
       let news=[];
       masNoticias.forEach(item=>{
           const singleItem={...item};
           news=[...news,singleItem]
       })
       this.setState({news:news})        
        };
    
    getItem(idItem){
        const item = this.state.news.find(item=>item.id===idItem);
        return item
    };
    handleDetail=(id)=>{
            const item = this.getItem(id);
            this.setState({noticiaDetalle:item})
    };
    handleDetailPrincipal=()=>{
        const item = noticiaPrincipal;
        this.setState({noticiaDetalle:item})
};
    handleClicks=(id)=>{
        let news = this.state.news;
        let index = news.indexOf(this.getItem(id));
        news[index].clicks+=1;
        this.setState(()=>{
           return {news:news}
        },this.noticiasMasLeidas())       
    };
    noticiasMasLeidas=()=>{   
        let masleidas=this.state.news.filter((x)=>{
            return x.clicks >0                        
        });
        masleidas.sort((a,b)=>{return b.clicks-a.clicks});
        this.setState({noticiasMasLeidas:masleidas})       
    };

    filtrarCategoria=(categoria)=>{
        const datos= masNoticias.filter(x=>{                
        return x.seccion===categoria})
        this.setState({categoria:datos,categoriaOn:true,seccion:categoria})
    };

    categoriaOff=()=>{
        this.setState({categoriaOn:false})
    }

   

    render(){
        return(
            <context.Provider value={{...this.state,
            handleDetail:this.handleDetail,
            handleClicks:this.handleClicks,           
            filtrarCategoria:this.filtrarCategoria,
            categoriaOff:this.categoriaOff,
            handleDetailPrincipal:this.handleDetailPrincipal
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const Consumer = context.Consumer

export {Provider,Consumer}