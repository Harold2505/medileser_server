import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestingError {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text' })
  medidor: string;

  @Column({ type: 'double' })
  temperature: number;

  @Column({ type: 'double' })
  input_pressure: number;

  @Column({ type: 'double' })
  output_pressure: number;

  @Column({ type: 'double' })
  initial_flow: number;

  @Column({ type: 'double' })
  end_flow: number;

  @Column({ type: 'text' })
  time: string;

  @Column({ type: 'double' })
  vol_p: number;

  @Column({ type: 'datetime', default: () => 'NOW()' })
  created_at: Date;
}
