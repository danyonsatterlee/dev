export function submit(uglyInfo){
    return{
    type: "SUBMIT_UGLY",
    uglyInfo
    }
}

export function remove(index){
    return{
    type: "DELETE_UGLY",
    index
    }
}


export function update(post,index){
    return{
    type: "EDIT_ITEM",
    index,
    post
    }
}

// handleRemove(index){
//     let deleteToDo = [...this.state.toDo];
//     deleteToDo.splice(index,1)
//     this.setState({
//         ...this.state,
//         toDo : deleteToDo
//     });
// }



//   updateNameOfItem(index, event) {
//     let items = [...this.state.items];
//     items[index].value = event.target.value;
//     this.setState({
//       ...this.state,
//       items: items
//     });
//   }