CREATE DATABASE far;
use far;


CREATE TABLE colonia (
    id_colonia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    colonia VARCHAR(50) NOT NULL
);

CREATE TABLE municipio (
    id_municipio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    municipio VARCHAR(50) NOT NULL
);

CREATE TABLE ciudad (
    id_ciudad INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ciudad VARCHAR(50) NOT NULL
);

create table estado(
	id_estado INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(50) NOT NULL
);


CREATE TABLE persona(
	id_persona int primary key auto_increment not null,
    nombre CHAR(10) NOT NULL,
    seg_nombre CHAR(10) NOT NULL,
    apellidoPaterno CHAR(15) NOT NULL,
    apellidoMaterno CHAR(15) NOT NULL,
    sexo enum('Hombre','Mujer'),
    telefonoCelular INT NOT NULL,
    telefonoParticular INT NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    correo_electronico VARCHAR(30) NOT NULL,
    id_colonia INT NOT NULL,
    id_municipio INT NOT NULL,
    id_ciudad INT NOT NULL,
    id_estado INT NOT NULL,
    codigoPostal INT NOT NULL,
    noInterno INT NOT NULL,
    noExterno INT NOT NULL,
    constraint fk_colonia_persona FOREIGN KEY (id_colonia) REFERENCES colonia(id_colonia),
    constraint fk_municipio_persona FOREIGN KEY (id_municipio) REFERENCES municipio(id_municipio),
	constraint fk_ciudad_persona FOREIGN KEY (id_ciudad) REFERENCES ciudad(id_ciudad),
    constraint fk_estado_persona FOREIGN KEY (id_estado) REFERENCES estado (id_estado)  
);

CREATE TABLE especialidad_medicas(
    id_especialidad INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    especialidad VARCHAR(20) NOT NULL,
    fechar_actulicacion DATE NOT NULL
);

CREATE TABLE medico(
    id_medico INT NOT NULL primary key AUTO_INCREMENT,
    cedulaProfesional VARCHAR(20) NOT NULL,
    id_especialidad INT NOT NULL,
    id_persona INT NOT NULL,
    registroSAA VARCHAR(10) NOT NULL,
    codigo_usuarioPS CHAR(15) NOT NULL,
    fecharAlta DATE NOT NULL,
    estatus INT NOT NULL,
    id_usuario INT NOT NULL,
    fechaActualizacion INT NOT NULL,
    constraint fk_especialidad_medico FOREIGN KEY(id_especialidad) REFERENCES especialidad_medicas(id_especialidad),
    constraint fk_persona_medico FOREIGN KEY(id_persona) REFERENCES persona(id_persona)
);


CREATE TABLE sucursales (
    id_sucursal INT NOT NULL primary key AUTO_INCREMENT, 
    clasificacion varchar(50) NULL, 
    nombre_desc VARCHAR(100) NOT NULL,
    registroSAA VARCHAR(30) NOT NULL,
	id_medico int not null,
    rfc VARCHAR(30) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    id_colonia INT NOT NULL,
    id_municipio INT NOT NULL,
    id_ciudad INT NOT NULL,
    id_estado INT NOT NULL,
    codigoPostal INT NOT NULL, 
    telefono INT NOT NULL,
    nom_servidor VARCHAR(20) NOT NULL,
    encargado VARCHAR(50) NOT NULL,
    cantidad_empleados INT NOT NULL,
    hora_apertura DATE NOT NULL,
    hora_cirre DATE NOT NULL,
    almacen VARCHAR(30) NOT NULL,
    almacen_medicamentos VARCHAR(30) NOT NULL,
    noExterior INT NOT NULL,
    noInterior INT NOT NULL,
    codigoCentroCosto INT not NULL,
    numEstablecimiento INT NOT NULL,
	constraint fk_medico_sucursales FOREIGN KEY(id_medico) REFERENCES medico(id_medico),
	constraint fk_colonia_sucursales FOREIGN KEY(id_colonia) REFERENCES colonia(id_colonia),
    constraint fk_municipio_sucursales FOREIGN KEY(id_municipio) REFERENCES municipio(id_municipio),
	constraint fk_ciudad_sucursales FOREIGN KEY(id_ciudad) REFERENCES ciudad(id_ciudad),
    constraint fk_estado_sucursales FOREIGN KEY(id_estado) REFERENCES estado (id_estado)
);
#no existe la tabla clasificacion


CREATE TABLE laboratorio(
    id_laboratorio INT primary key NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    fechaActualizacion DATE NOT NULL,
    id_usuario INT NOT NULL,
    estatus VARCHAR(10) NOT NULL
);

CREATE TABLE usuario(
    id_usuario INT primary key NOT NULL AUTO_INCREMENT,
    id_persona INT NOT NULL,
    nombre_us VARCHAR(50) NOT NULL,
    rol VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_vigencia DATE NOT NULL,
    estatus VARCHAR(10) NOT NULL
);

CREATE TABLE lista_descuento (
    id_lista int NOT NULL primary key AUTO_INCREMENT,
    region INT NOT NULL,
    desc_nombre VARCHAR(50) NOT NULL,
    fecha_actualizacion DATETIME NOT NULL,
    id_usuario INT NOT NULL,
    credito BIT (2),
    tipo_filtro VARCHAR(10) NOT NULL,
    clave_familia VARCHAR(30) NOT NULL,
    claveClasificacionSSa VARCHAR(15) NOT NULL,
    id_laboratorio INT NOT NULL, 
    codigoSal INT NOT NULL,
    descuento INT NOT NULL,
    sinUtilidad BIT(2),
    estatus VARCHAR (20) NOT NULL,
	constraint fk_usuario_lista_descuento FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),
	constraint fk_laboratorio_lista_descescuento FOREIGN KEY(id_laboratorio) REFERENCES laboratorio(id_laboratorio)
);

create table empleado(
	id_empleado int primary key not null auto_increment,
	id_persona int null,
	id_sucursal int not null,
	hora_inicio date null,
	hora_salida date null,
	constraint fk_persona_empleado FOREIGN KEY(id_persona) REFERENCES persona(id_persona),
	constraint fk_sucursal_empleado FOREIGN KEY(id_sucursal) REFERENCES sucursales(id_sucursal)
);

CREATE TABLE claves_producto (
    id_clave INT primary key NOT NULL AUTO_INCREMENT,
    desc_nombre VARCHAR (30) NOT NULL,
    estatus VARCHAR (10) NOT NULL,
    fecha_actualizacion DATE NOT NULL
);

CREATE TABLE producto (
    id_producto INT primary key NOT NULL AUTO_INCREMENT,
    id_clave INT NOT NULL,
    tipo_producto VARCHAR(30) NOT NULL,
    codigoFamilia1 varchar(50) NOT NULL,
    id_laboratorio INT NOT NULL,
    precio_publico INT NOT NULL,
    precio_farmacia INT NOT NULL,
    precio_venta INT NOT NULL,
    precio_venta_mixto INT NOT NULL,
    ultimo_costo VARCHAR(10) NOT NULL,
    costo_promedio VARCHAR(10) NOT NULL,
    fecha_registro date NOT NULL,
    fecha_ultima_compra DATE NOT NULL,
    fecha_ultima_venta DATE NOT NULL,
    fecha_modificacion_precio date NOT NULL,
    estatus VARCHAR(10) NOT NULL,
    cogido_mueble VARCHAR(30) NOT NULL,
    codigo_unidad_medida VARCHAR (20) not NULL,
    alta_modificacion VARCHAR(20) NOT NULL,
    fechaActualizacion DATE NOT NULL,
    codigoClaveProducto varchar(50) NOT NULL,
    codigo_clave_unidad VARCHAR (30) NOT NULL,
    paga_IEPS VARCHAR(30) NOT NULL,
    codigo_impuesto_IEPS INT NOT NULL,
    constraint fk_clave_producto FOREIGN KEY(id_clave) REFERENCES claves_producto(id_clave),
    constraint fk_laboratorio_producto FOREIGN KEY(id_laboratorio) REFERENCES laboratorio(id_laboratorio)
);

CREATE TABLE ventas (
    id_venta INT primary key NOT NULL AUTO_INCREMENT,
    id_sucursal INT NOT NULL,
	id_empleado int null,
    fecha_venta DATE NOT NULL,
    numero_productos INT NOT NULL,
    constraint fk_sucursal_ventas FOREIGN KEY(id_sucursal) REFERENCES sucursales(id_sucursal),
    constraint fk_empleado_sucursal FOREIGN KEY(id_empleado) REFERENCES empleado(id_empleado)
);

CREATE TABLE productos_ventas (
    id_venta INT NOT NULL ,
    id_producto INT NOT NULL,
    PRIMARY KEY (id_venta, id_producto),
    constraint fk_venta_producto_ventas FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
    constraint fk_producto_producto_ventas FOREIGN KEY(id_producto) REFERENCES producto(id_producto)
);

CREATE TABLE promociones_list (
    id_promocion INT primary key NOT NULL AUTO_INCREMENT,
    desc_promocion VARCHAR (50) NOT NULL,
    fecha_inicial DATE NOT NULL,
    fecha_final DATE NOT NULL,
    tipo_filtro VARCHAR (50) NOT NULL,
    clave_familia_med VARCHAR (20) NOT NULL,
    clave_clasificacion_essa VARCHAR (30) NOT NULL,
    id_laboratorio INT NOT NULL,
    descuento INT NOT NULL,
    aplica_descuento BIT NOT NULL,
    aplica_precio_fijo BIT NOT NULL,
    fecha_actualizacion DATE NOT NULL,
    status VARCHAR (10) NOT NULL,
    permitir_devoluciones BIT NOT NULL,
    agotar_existencias VARCHAR (10) NOT NULL,
    constraint fk_laboratorio_promociones_list FOREIGN KEY(id_laboratorio) REFERENCES laboratorio(id_laboratorio)
);





