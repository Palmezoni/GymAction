using FluentMigrator;

namespace GymAction.Migrations.DefaultDB
{
    [Migration(20200829092200)]
    public class DefaultDB_20200829_092200_Mudanca02 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("AULA_INSTRUTOR")
                    .AddColumn("COD_REGISTRO").AsInt32().NotNullable()
                        .PrimaryKey().Identity();
        }
    }
}