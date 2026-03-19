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
    }
    else
    {
        table_message_field.innerHTML = "<p>Not even a nummber man!</p>";
    }
}