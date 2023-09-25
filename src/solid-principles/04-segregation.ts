(()=>{

})();
interface Bird{
     Eat(): void;
}
interface FlyingBird{
    Fly(): void;
}
interface SwimmingBird{
    swim(): void;
}
interface RunningBird{
    run(): void;
}
class Tucan implements Bird,FlyingBird,RunningBird{
    public run(): void {
        console.log('Running');
    }
    
    public Fly(){
        console.log('Flying')
    };
    public Eat(){
        console.log('Eating')
    };
}
class Homingbird implements Bird, FlyingBird{
    public Fly(){
        console.log('Flying')
    };
    public Eat(){
        console.log('Eating')
    };
    public run(){
        console.log('Running');
    };
}
class Ostrich implements Bird,RunningBird{
    public Eat(){
        console.log('Eating')
    };
    public run(){
        console.log('Running');
    };
}
class Penguin implements Bird, SwimmingBird{
    swim(): void {
        console.log('Swimming')
    }
    public Eat(){
        console.log('Eating')
    };
    public run(){
        console.log('Running');
    };
}
