
function Component(props) {
  return (
    <div style={{width:'50%', border:'2px solid black', margin:'10px', padding:'15px'}}>
       {props.children}      
    </div>
  )
}

export default Component
