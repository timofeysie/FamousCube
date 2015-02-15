/*globals define*/
define(function(require, exports, module) {
    'use strict';
    var View = require('famous/core/View');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var GenericSync = require('famous/inputs/GenericSync');
    var MouseSync = require('famous/inputs/MouseSync');
    var ScrollSync = require('famous/inputs/ScrollSync');
    var TouchSync = require('famous/inputs/TouchSync');
    var EventHandler = require('famous/core/EventHandler');
    var Easing = require('famous/transitions/Easing');
    var Timer = require('famous/utilities/Timer');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');
    var Cube = require('views/Cube');
    var __ = require('underscore');

    function FamousCube() {
        View.apply(this, arguments);

        var initialTime = Date.now();
        var _root = new View();
        var _child;
        var i;
        var mod;
        var cube;
        var trans;
        var dimensions = [50, 50, 50];
        var famousMod = [];

        var increment = 25; // the size between squres.
        var position = 0; // the position in the word
        var spacer = 25; // space in between letters
        var position = -150; // the x position of each letter
        var letter_width = 175; // most letters are 175 or 200 in width

        /**
         * C
         */
        var letter = [[2,0],[4,0],[1,2],[5,2],[0,4],[1,6],[5,6],[2,8],[4,8]];
        //var letter = [[50,50],[50,100],[50,150],[50,200],[50,250],[100,50],[150,50],[200,50],[100,150],[150,150]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 175;
        position = position + letter_width + spacer;

        /**
        * U
        */
        var letter = [[0,0],[0,2],[0,4],[0,6],[6,0],[6,2],[6,4],[6,6],[1,8],[3,8],[5,8]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 200;
        position = position + letter_width + spacer;

        /**
        * R
        */
        var letter = [[0,0],[2,0],[4,0],[0,2],[5,2],[0,4],[2,4],[4,4],[0,6],[5,6],[0,8],[6,8]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 200;
        position = position + letter_width + spacer;

        /**
         * C
         */
        var letter = [[2,0],[4,0],[1,2],[5,2],[0,4],[1,6],[5,6],[2,8],[4,8]];
        //var letter = [[50,50],[50,100],[50,150],[50,200],[50,250],[100,50],[150,50],[200,50],[100,150],[150,150]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 175;
        position = position + letter_width + spacer;

        /**
         * H
         */
        var letter = [[0,0],[6,0],[0,2],[6,2],[0,4],[2,4],[4,4],[6,4],[0,6],[6,6],[0,8],[6,8]];
        //var letter = [[50,50],[50,100],[50,150],[50,200],[50,250],[100,50],[150,50],[200,50],[100,150],[150,150]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 200;
        position = position + letter_width + spacer;

        /**
         * O
         */
        var letter = [[2,0],[4,0],[2,8],[4,8],[0,1],[0,3],[0,5],[0,7],[6,1],[6,3],[6,5],[6,7]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 225;
        position = position + letter_width + spacer;

        /**
         * D
         */
        var letter = [[0,0],[2,0],[4,0],[0,2],[5,2],[0,4],[5,4],[0,6],[5,6],[0,8],[2,8],[4,8]];
        for (i = 0; i < letter.length; i++) {
            trans = new TransitionableTransform();
            mod = new Modifier({transform: trans});
            cube = new Cube({ dimensions: dimensions });
            _child = new View();
            _child.add(mod).add(cube);
            _root.add(_child);
            famousMod.push({cube: cube,mod: mod,trans: trans,singleAnimate: true, final: 
            Transform.translate(((letter[i][0]*increment)+position),(letter[i][1]*increment), 0)
            });
        }
        letter_width = 175;
        position = position + letter_width + spacer;

        var singleAnimate = function(target, sfinal, duration, direction) {
            sfinal = sfinal === undefined ? Transform.translate(1500 * Math.random(), 1500 * Math.random(), 500 * Math.random()) : sfinal;
            duration = duration === undefined ? 1000 : duration;
            direction = direction === undefined ? true : direction;
            target.trans.set(sfinal, {
                duration: duration,
                curve: Easing.inOutExpo
            }, function() {
                var sfinal = target.trans.getFinal();
                var scale = .25 * Math.random();
                var rotate = Math.random();
                var key = Math.ceil(Math.random() * 3);
                if (direction) {
                    sfinal[(11 + key)] -= 100 * Math.random();
                    sfinal[0] -= scale;
                    sfinal[5] -= scale;
                    sfinal[10] -= scale;
                    sfinal = Transform.multiply(sfinal, Transform.rotate(rotate * -1, rotate * -1, rotate * -1));
                } else {
                    sfinal[(11 + key)] += 100 * Math.random();
                    sfinal[0] += scale;
                    sfinal[5] += scale;
                    sfinal[10] += scale;
                    sfinal = Transform.multiply(sfinal, Transform.rotate(rotate, rotate, rotate));
                }
                direction = !direction;

                if (target.singleAnimate === true) {
                    singleAnimate(target, sfinal, Math.random() * 1000 + 3500, direction);
                }
            });
        };

        __.each(famousMod, function(mod, i) {
            famousMod[i].cube.root.on('click', function() {
                var nodes = this.context._node._child;
                __.each(nodes, function(node) {
                    node = node.get();
                    var mod = node.get();
                    var surf = node._child.get();
                    surf.setProperties({
                        backgroundColor: 'rgba(255, 100, 100, .5)'
                    });
                });
            });
            singleAnimate(mod);
        });

        var finalTrans = new TransitionableTransform();
        var key = 0;
        var animate = function(key) {
            if (key >= famousMod.length) {
                Timer.setTimeout(function() {
                    __.each(famousMod, function(mod, i) {
                        famousMod[i].singleAnimate = true;
                        singleAnimate(famousMod[i]);
                    });
                    Timer.setTimeout(function() {
                        animate(0);
                    }, 2500);
                }, 3000);
                return false;
            }
            var mod = famousMod[key];
            famousMod[key].singleAnimate = false;
            famousMod[key].trans.halt();
            var final = Transform.multiply(mod.final, Transform.rotate(Math.random() * Date.now() * .002, Math.random() * Date.now() * -.001, Math.random() * Date.now() * -.002));
            mod.trans.set(final, {
                duration: Math.round(Math.random() * 300) + 300,
                curve: Easing.inOutExpo
            }, function() {
                mod.trans.set(mod.final, {
                    duration: 333,
                    curve: Easing.inOutCirc
                }, function() {
                });

                key++;
                animate(key);
            });
        };

        Timer.setTimeout(function() {
            animate(0);
        }, 2000);

        var surf = new ContainerSurface({
            properties: {
                backfaceVisibility: 'visible',
                '-webkit-backface-visibility': 'visible'
            }
        });
        var surfcube = new ContainerSurface({
            properties: {
                backfaceVisibility: 'visible',
                '-webkit-backface-visibility': 'visible'
            }
        });

        var modFinal = Transform.multiply(Transform.translate(0, 0, 0), Transform.rotate(.5, -.005, 0));
        modFinal = Transform.multiply(modFinal, Transform.scale(.6, .6, .6));
        finalTrans.set(modFinal);

        mod = new Modifier({
            origin: [.5, .5],
            align: [.5, .5],
            transform: finalTrans
        });

        surfcube.add(_root);
        surf.add(mod).add(surfcube);

        GenericSync.register({
            'mouse': MouseSync,
            'touch': TouchSync,
            'scroll': ScrollSync
        });

        var sync = new GenericSync(['mouse', 'scroll', 'touch'], {
            direction: [GenericSync.DIRECTION_X, GenericSync.DIRECTION_Y]
        });
        surf.pipe(sync).pipe(this);
        sync.on('update', function(data) {
            var modFinal = finalTrans.getFinal();
            var rotate = [
                data.delta[1] * .001,
                data.delta[0] * -.002
            ];
            modFinal = Transform.multiply(modFinal, Transform.rotate(rotate[0], rotate[1], 0));
            finalTrans.set(modFinal);
        });

        mod = new Modifier({
            origin: [.5, .5],
            // transform: Transform.scale(.5, .5, .5)
            transform: function() {
                return Transform.rotate(0, .0001 * (Date.now() - initialTime), 0);
            }
        });

        this.add(mod).add(surf);

        return this;
    }

    FamousCube.prototype = Object.create(View.prototype);
    FamousCube.prototype.constructor = FamousCube;

    FamousCube.DEFAULT_OPTIONS = {
    };

    module.exports = FamousCube;
});
