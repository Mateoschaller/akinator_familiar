const si = document.getElementById('si');
const no = document.getElementById('no');
const pregunta = document.getElementById('pregunta')
const resultado = document.querySelector('.title2');
const botones = document.querySelector('.resq');
si.addEventListener("click", () => {
    pregunta.textContent = '¿vive en villa?';
    no.addEventListener("click", () => {
        pregunta.textContent = '¿vive en la provincia de santa fe?'
        no.addEventListener("click", () => {
            pregunta.textContent = '¿es mujer?'
            no.addEventListener("click", () => {
                pregunta.textContent = '';
                resultado.textContent = '';
                resultado.textContent = 'ES IVO';
                 
                buttom.removeEventListener;
            })
            si.addEventListener("click", () => {
                pregunta.textContent = '';
                resultado.textContent = '';
                resultado.textContent = 'ES AMBAR';
                 
                buttom.removeEventListener;
            })
        })
        si.addEventListener("click", () => {
            pregunta.textContent = '¿vive en santoto?';
            no.addEventListener("click", () => {
                pregunta.textContent = '¿vive en el campo?'
                no.addEventListener("click", () => {
                    pregunta.textContent = '¿es mujer?'
                    resultado.textContent = '';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '¿tiene hijos?'
                        no.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = '';
                            resultado.textContent = 'ES EDUARDO';
                             
                            buttom.removeEventListener;
                        })
                        si.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = '';
                            resultado.textContent = 'ES GONZI';
                             
                            buttom.removeEventListener;
                        })
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = '';
                        resultado.textContent = 'ES NARE';
                         
                        buttom.removeEventListener;

                    })
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '';
                    resultado.textContent = '';
                    resultado.textContent = 'ES ADRIAN';
                     
                    buttom.removeEventListener;
                })
            })
            si.addEventListener("click", () => {
                pregunta.textContent = '¿es mayor de edad?';
                no.addEventListener("click", () => {
                    pregunta.textContent = '¿es el mayor de los hermanos?'
                    no.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES GENARO';
                         
                        buttom.removeEventListener;
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES BENJA';
                         
                        buttom.removeEventListener;

                    })
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '¿es mujer?';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES FRANCO';
                         
                        buttom.removeEventListener;
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES MELI';
                         
                        buttom.removeEventListener;
                    })

                })
            })
        })
    })
    si.addEventListener("click", () => {
        pregunta.textContent = '¿tiene hijos?';
        resultado.textContent = '';
        no.addEventListener("click", () => {
            pregunta.textContent = '¿es mujer?'
            resultado.textContent = '';
            no.addEventListener("click", () => {
                pregunta.textContent = '¿es mayor de edad?'
                resultado.textContent = '';
                no.addEventListener("click", () => {
                    pregunta.textContent = '¿es de la familia benitendi?'
                    resultado.textContent = '';
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = '';
                        resultado.textContent = 'ES GERO';
                         
                        buttom.removeEventListener;
                    })
                    no.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = '';
                        resultado.textContent = 'ES YARI';
                         
                        buttom.removeEventListener;
                    })
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '';
                    resultado.textContent = '';
                    resultado.textContent = 'ES MATEO';
                     
                    buttom.removeEventListener;

                })
            })
            si.addEventListener("click", () => {
                pregunta.textContent = '¿es de la familia radulovich?';
                resultado.textContent = '';
                no.addEventListener("click", () => {
                    pregunta.textContent = '';
                    resultado.textContent = 'ES JOAQUINA';
                     
                    buttom.removeEventListener;
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '¿es travieza?';
                    resultado.textContent = '';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES INTI';
                         
                        buttom.removeEventListener;
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES PIERI';
                         
                        buttom.removeEventListener;

                    })

                })

            })
        })
        si.addEventListener("click", () => {
            pregunta.textContent = '¿tiene mas de 1 hijo?';
            resultado.textContent = '';
            no.addEventListener("click", () => {
                pregunta.textContent = '¿es de la familia franich?';
                resultado.textContent = '';
                no.addEventListener("click", () => {
                    pregunta.textContent = '¿es hombre?';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '¿trabaja en el jardin?';
                        no.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = 'ES JIME';
                             
                            buttom.removeEventListener;
                        })
                        si.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = 'ES MARI';
                             
                            buttom.removeEventListener;

                        })
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES BAUTI';
                         
                        buttom.removeEventListener;
                    })
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '¿es mujer?';
                    resultado.textContent = '';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES IVAN RADIMAK';
                         
                        buttom.removeEventListener;
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES GERI';
                         
                        buttom.removeEventListener;

                    })

                })
            })
            si.addEventListener("click", () => {
                pregunta.textContent = '¿es mujer?';
                resultado.textContent = '';
                no.addEventListener("click", () => {
                    pregunta.textContent = '¿es de la familia radulovich?'
                    resultado.textContent = '';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '¿es de la familia benitendi?'
                        resultado.textContent = '';
                        no.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = 'ES TEBO';
                             
                            buttom.removeEventListener;
                        })
                        si.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = 'ES DIEGO';
                             
                            buttom.removeEventListener;
                        })
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES IVAN RADULO';
                         
                        buttom.removeEventListener;
                    })
                })
                si.addEventListener("click", () => {
                    pregunta.textContent = '¿es de la familia radulovich?';
                    resultado.textContent = '';
                    no.addEventListener("click", () => {
                        pregunta.textContent = '¿es de la familia franich?';
                        resultado.textContent = '';

                        no.addEventListener("click", () => {
                            pregunta.textContent = '';
                            resultado.textContent = 'ES LA ABUELA MARIA';
                             
                            buttom.removeEventListener;
                        })
                        si.addEventListener("click", () => {
                            pregunta.textContent = '¿es de la familia benitendi?';
                            resultado.textContent = '';
                            no.addEventListener("click", () => {
                                pregunta.textContent = '';
                                resultado.textContent = 'ES SILVANA';
                                 
                                buttom.removeEventListener;
                            })
                            si.addEventListener("click", () => {
                                pregunta.textContent = '';
                                resultado.textContent = 'ES GEORGINA';
                                 
                                buttom.removeEventListener;
                            })

                        })
                    })
                    si.addEventListener("click", () => {
                        pregunta.textContent = '';
                        resultado.textContent = 'ES LORENA';
                         
                        buttom.removeEventListener;
                    })

                })

            })
        })

    })
})
const reinciar = document.querySelector(".reiniciar");
reinciar.addEventListener('click',()=>{
    location.reload();
})
