let fault_counter = 0;
let fault_list = ["Egy számot írj be, ez nem az!", "Ez még mindig nem egy szám!", "Nem ez még továbbra sem szám!", "Kezdem reménytelennek érezni a helyzetet...", "Nem még mindig nem szám. Kicsit sok lett a pia?", "Szerintem inkább hagyjuk, menj inkább táncolni!"]

function write_message_for_table()
{
    let table_num_field = document.getElementById("table_num");
    let table_message_field = document.getElementById("table_message");
    let table_num = parseInt(table_num_field.value);
    if(!isNaN(table_num))
    {
        if(table_num == 1)
        {
            table_message_field.innerHTML = "<p>Hello bello</p>";
        }
        else
        {
            table_message_field.innerHTML = "<p>Not Hello bello</p>";
        }
        fault_counter = 0;
    }
    else
    {
        table_message_field.innerHTML = "<p>" + fault_list[fault_counter] + "</p>";
        if(fault_counter < 5)
        {
            fault_counter++;
        }
    }
}