import { CreateShapeWithLight } from './light';
import { LightInputs } from './shaders';
import { SphereData } from './vertex_data';
import $ from 'jquery';

const CreateShape = async (li:LightInputs, radius = 2, u = 20, v = 15, isAnimation = true) => {
    const data = SphereData(radius, u, v);
    await CreateShapeWithLight(data?.vertexData!, data?.normalData!, li, isAnimation);
}

let radius = 2;
let u = 20;
let v = 15;
let li:LightInputs = {};
let isAnimation = true;

CreateShape(li, radius, u, v, isAnimation);

$('#id-radio input:radio').on('click', function(){
    let val = $('input[name="options"]:checked').val();
    if(val === 'animation') isAnimation = true;
    else isAnimation = false;
    CreateShape(li, radius, u, v, isAnimation);
});

$('#btn-redraw').on('click', function(){
    li.color = $('#id-color').val()?.toString();
    li.isPhong = $('#id-isphong').val()?.toString();
    li.ambientIntensity = $('#id-ambient').val()?.toString();
    li.diffuseIntensity = $('#id-diffuse').val()?.toString();
    li.specularIntensity= $('#id-specular').val()?.toString();
    li.shininess= $('#id-shininess').val()?.toString();
    li.specularColor = $('#id-scolor').val()?.toString();
    radius = parseFloat($('#id-radius').val()?.toString()!);
    u = parseInt($('#id-u').val()?.toString()!);
    v = parseInt($('#id-v').val()?.toString()!);
    CreateShape(li, radius, u, v, isAnimation);
});