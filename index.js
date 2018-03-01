const Simulator = require('./src/RideProblem');
const fs = require('fs');

const inputA = fs.readFileSync('in/a_example.in', 'utf8');
const simulatorA = new Simulator(inputA);
const outA = simulatorA.simulate();
fs.writeFileSync('out/A.out', outA);

const inputB = fs.readFileSync('in/b_should_be_easy.in', 'utf8');
const simulatorB = new Simulator(inputB);
const outB = simulatorB.simulate();
fs.writeFileSync('out/B.out', outB);

const inputC = fs.readFileSync('in/c_no_hurry.in', 'utf8');
const simulatorC = new Simulator(inputC);
const outC = simulatorC.simulate();
fs.writeFileSync('out/C.out', outC);

const inputD = fs.readFileSync('in/d_metropolis.in', 'utf8');
const simulatorD = new Simulator(inputD);
const outD = simulatorD.simulate();
fs.writeFileSync('out/D.out', outD);

const inputE = fs.readFileSync('in/e_high_bonus.in', 'utf8');
const simulatorE = new Simulator(inputE);
const outE = simulatorE.simulate();
fs.writeFileSync('out/E.out', outE);