function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 2;

    this.prevPos = this.pos.copy();

    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function(vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.show = function() {
        stroke(0, 5);
        strokeWeight(1);
        // var rgbr = Math.floor(Math.random() * 256);
        // var rgbg = Math.floor(Math.random() * 256);
        // var rgbb = Math.floor(Math.random() * 256);

        // var rgbr = random(255);
        // var rgbg = random(255);
        // var rgbb = random(255);
        // stroke('rgba(255, 204, 0, 0.1)'); //colors the particles
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        // point(this.pos.x, this.pos.y);
        this.updatePrev();
    }

    this.updatePrev = function() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}





//////////////////////////////////////////////////////////////////////






//WISPY HAIR!!!!!

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.maxspeed = 2;

//     this.prevPos = this.pos.copy();

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxspeed);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.follow = function(vectors) {
//         var x = floor(this.pos.x / scl);
//         var y = floor(this.pos.y / scl);
//         var index = x + y * cols;
//         var force = vectors[index];
//         this.applyForce(force);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0, 5);
//         strokeWeight(1);
//         // stroke('rgba(255, 80, 255, 1)'); //colors the particles
//         line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
//         // point(this.pos.x, this.pos.y);
//         this.updatePrev();
//     }

//     this.updatePrev = function() {
//         this.prevPos.x = this.pos.x;
//         this.prevPos.y = this.pos.y;
//     }

//     this.edges = function() {
//         if (this.pos.x > width) {
//             this.pos.x = 0;
//             this.updatePrev();
//         }
//         if (this.pos.x < 0) {
//             this.pos.x = width;
//             this.updatePrev();
//         }
//         if (this.pos.y > height) {
//             this.pos.y = 0;
//             this.updatePrev();
//         }
//         if (this.pos.y < 0) {
//             this.pos.y = height;
//             this.updatePrev();
//         }
//     }
// }





//SWIRLY HAIR!!! NO GRID.. fixed the updateprev function

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.maxspeed = 2;

//     this.prevPos = this.pos.copy();

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxspeed);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.follow = function(vectors) {
//         var x = floor(this.pos.x / scl);
//         var y = floor(this.pos.y / scl);
//         var index = x + y * cols;
//         var force = vectors[index];
//         this.applyForce(force);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0, 5);
//         strokeWeight(1);
//         // stroke('rgba(255, 80, 255, 1)'); //colors the particles
//         line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
//         // point(this.pos.x, this.pos.y);
//     }

//     this.updatePrev = function() {
//         this.prevPos.x = this.pos.x;
//         this.prevPos.y = this.pos.y;
//     }

//     this.edges = function() {
//         if (this.pos.x > width) {
//             this.pos.x = 0;
//             this.updatePrev();
//         }
//         if (this.pos.x < 0) {
//             this.pos.x = width;
//             this.updatePrev();
//         }
//         if (this.pos.y > height) {
//             this.pos.y = 0;
//             this.updatePrev();
//         }
//         if (this.pos.y < 0) {
//             this.pos.y = height;
//             this.updatePrev();
//         }
//     }
// }





//FUNKY GRID!!!

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.maxspeed = 2;

//     this.prevPos = this.pos.copy();

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxspeed);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.follow = function(vectors) {
//         var x = floor(this.pos.x / scl);
//         var y = floor(this.pos.y / scl);
//         var index = x + y * cols;
//         var force = vectors[index];
//         this.applyForce(force);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0, 5);
//         strokeWeight(1);
//         // stroke('rgba(255, 80, 255, 1)'); //colors the particles
//         line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
//         // point(this.pos.x, this.pos.y);
//     }

//     this.edges = function() {
//         if (this.pos.x > width) this.pos.x = 0;
//         if (this.pos.x < 0) this.pos.x = width;
//         if (this.pos.y > height) this.pos.y = 0;
//         if (this.pos.y < 0) this.pos.y = height;
//     }
// }







//HAIRY WEB!!!!

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.maxspeed = 2;

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxspeed);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.follow = function(vectors) {
//         var x = floor(this.pos.x / scl);
//         var y = floor(this.pos.y / scl);
//         var index = x + y * cols;
//         var force = vectors[index];
//         this.applyForce(force);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0, 5);
//         strokeWeight(5);
//         // stroke('rgba(255, 80, 255, 1)'); //colors the particles
//         point(this.pos.x, this.pos.y);
//     }

//     this.edges = function() {
//         if (this.pos.x > width) this.pos.x = 0;
//         if (this.pos.x < 0) this.pos.x = width;
//         if (this.pos.y > height) this.pos.y = 0;
//         if (this.pos.y < 0) this.pos.y = height;
//     }
// }





//FLOWFIELD PARTICLES FORM COLUMNS IN THE WIND!!!

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.maxspeed = 4;

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxspeed);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.follow = function(vectors) {
//         var x = floor(this.pos.x / scl);
//         var y = floor(this.pos.y / scl);
//         var index = x + y * cols;
//         var force = vectors[index];
//         this.applyForce(force);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }

//     this.edges = function() {
//         if (this.pos.x > width) this.pos.x = 0;
//         if (this.pos.x < 0) this.pos.x = width;
//         if (this.pos.y > height) this.pos.y = 0;
//         if (this.pos.y < 0) this.pos.y = height;
//     }
// }





//PREVIOUSLY

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = p5.Vector.random2D();
//     this.acc = createVector(0, 0);

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.applyForce = function(force) {
//         this.acc.add(force);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }

//     this.edges = function() {
//         if (this.pos.x > width) this.pos.x = 0;
//         if (this.pos.x < 0) this.pos.x = width;
//         if (this.pos.y > height) this.pos.y = 0;
//         if (this.pos.y < 0) this.pos.y = height;
//     }
// }




//MORE PREVIOUSLY


// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = p5.Vector.random2D();
//     this.acc = createVector(0, 0);

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }

//     this.edges = function() {
//         if (this.pos.x > width) this.pos.x = 0;
//         if (this.pos.x < 0) this.pos.x = width;
//         if (this.pos.y > height) this.pos.y = 0;
//         if (this.pos.y < 0) this.pos.y = height;
//     }
// }



//EVEN MORE PREVIOUSLY


// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = p5.Vector.random2D();
//     this.acc = createVector(0, 0);

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }
// }



//EVEN MORE PREVIOUSLY THAN ABOVE

// function Particle() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = p5.Vector.random2D();
//     this.acc = createVector(0, 0);

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }
// }




//BABY FUNCTION

// function Particle() {
//     this.pos = createVector(0, 0);
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);

//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     this.show = function() {
//         stroke(0);
//         point(this.pos.x, this.pos.y);
//     }
// }