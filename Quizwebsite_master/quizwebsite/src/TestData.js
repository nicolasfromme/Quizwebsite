import React from 'react';
import Button from '@material-ui/core/Button';



class datenschutz extends React.Component {
    post_data = () => {
        let data = {
            generalDetail: "testdata",
            
      };

      axios.post("http://localhost:5000/api", data).then(() => {

       }).catch(() => {
          console.log("Something went wrong. Plase try again later");
      });
    }
    
    render() {
        return(
            <div>
                <h1>TestData</h1>
                <Button onClick = {() => this.post_data()}>Go</Button>
            </div>
            
        )    
    }
}

export default datenschutz;