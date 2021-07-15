const GRID_SIZE = 21;

const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}
const onMargin=(m)=>{
    return m.x<1||m.x>GRID_SIZE||m.y<1||m.y>GRID_SIZE;
}