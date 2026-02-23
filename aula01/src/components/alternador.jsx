// export: a função fica disponível para qualquer um que importar
// default: função padrão a ser exportada
export default function Alternador({estado, setEstado}){
    return(
        <div>
            <input type="checkbox" name="alternador" checked={estado} onChange={() => setEstado(!estado)}/>
            <label for="alternador">Alternar</label>
        </div>
    )
}